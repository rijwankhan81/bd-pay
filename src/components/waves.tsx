"use client";

import React, { useEffect, useRef } from "react";

class WavesCanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  settings: any;
  waves: any[];
  animationFrame: number | undefined;

  constructor(elm: HTMLCanvasElement, options = {}) {
    this.canvas = elm;

    if (!this.canvas) return;

    const data = this.canvas.dataset;

    this.settings = {
      waveCount:
        parseInt(data.waveCount || "") || (options as any).waveCount || 9,
      amplitude:
        parseInt(data.amplitude || "") || (options as any).amplitude || 50,
      baseSpeed:
        parseFloat(data.baseSpeed || "") || (options as any).baseSpeed || 0.005,
      waveSpacing:
        parseInt(data.waveSpacing || "") || (options as any).waveSpacing || 30,
      baseColor: data.baseColor
        ? data.baseColor.split(",").map(Number)
        : (options as any).baseColor || [10, 25, 42], // #0A192A
      lineWidth:
        parseInt(data.lineWidth || "") || (options as any).lineWidth || 1,
      direction: data.direction || (options as any).direction || "left",
      leftOffset:
        parseFloat(data.leftOffset || "") || (options as any).leftOffset || 0,
      rightOffset:
        parseFloat(data.rightOffset || "") || (options as any).rightOffset || 0,
    };

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.waves = [];

    this.init();
  }

  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.waves.forEach((wave) => wave.updateOffset());
  }

  Wave = class {
    index: number;
    phase: number;
    settings: any;
    canvas: HTMLCanvasElement;
    color: string;
    yOffset: number;

    constructor(index: number, settings: any, canvas: HTMLCanvasElement) {
      this.index = index;
      this.phase = index * 0.3;
      this.settings = settings;
      this.canvas = canvas;
      this.color = `rgba(${settings.baseColor[0]}, ${settings.baseColor[1]}, ${
        settings.baseColor[2]
      }, ${1 - index / this.settings.waveCount})`;
      this.updateOffset();
    }

    updateOffset() {
      const totalHeight =
        (this.settings.waveCount - 1) * this.settings.waveSpacing;
      const centerOffset = (this.canvas.height - totalHeight) / 2;
      this.yOffset = centerOffset + this.index * this.settings.waveSpacing;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.settings.lineWidth;

      let firstX = 0;
      const leftOffsetPx =
        (this.settings.leftOffset / 100) * this.canvas.height;
      let firstY =
        this.yOffset +
        leftOffsetPx +
        Math.sin(firstX * 0.005 + this.phase) * this.settings.amplitude +
        Math.cos(firstX * 0.002 + this.phase) * this.settings.amplitude * 0.5;
      ctx.moveTo(firstX, firstY);

      for (let x = 0; x <= this.canvas.width; x += 20) {
        const t = x / this.canvas.width;
        const leftOffsetPx =
          (this.settings.leftOffset / 100) * this.canvas.height;
        const rightOffsetPx =
          (this.settings.rightOffset / 100) * this.canvas.height;
        const offset = leftOffsetPx * (1 - t) + rightOffsetPx * t;
        const y =
          this.yOffset +
          offset +
          Math.sin(x * 0.005 + this.phase) * this.settings.amplitude +
          Math.cos(x * 0.002 + this.phase) * this.settings.amplitude * 0.5;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    }

    update() {
      const speed =
        this.settings.direction === "right"
          ? -this.settings.baseSpeed
          : this.settings.baseSpeed;
      this.phase += speed;
    }
  };

  init() {
    window.addEventListener("resize", () => this.resizeCanvas());
    this.resizeCanvas();

    for (let i = 0; i < this.settings.waveCount; i++) {
      this.waves.push(new this.Wave(i, this.settings, this.canvas));
    }

    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.waves.forEach((wave) => {
      wave.updateOffset();
      wave.update();
      wave.draw(this.ctx);
    });

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    window.removeEventListener("resize", () => this.resizeCanvas());
    this.waves = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    cancelAnimationFrame(this.animationFrame || 0);
  }

  updateSettings(newSettings: any) {
    this.settings = { ...this.settings, ...newSettings };
    this.waves = [];
    for (let i = 0; i < this.settings.waveCount; i++) {
      this.waves.push(new this.Wave(i, this.settings, this.canvas));
    }
  }
}

const Waves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wavesRef = useRef<WavesCanvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      wavesRef.current = new WavesCanvas(canvasRef.current, {
        baseColor: [10, 25, 42], // #0A192A
      });
    }
    return () => {
      wavesRef.current?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-waves
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        background: "transparent",
      }}
    />
  );
};

export default Waves;
