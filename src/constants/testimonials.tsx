interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

const testimonialsEN: Testimonial[] = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Small Business Owner",
    image: "/images/testimonials/rahim.jpg",
    review:
      "BD PAY has transformed how I run my business. I can now accept payments easily and my customers love the convenience. The real-time sales tracking is a game-changer!",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "University Student",
    image: "/images/testimonials/nusrat.jpg",
    review:
      "BD PAY made my life easier, I pay bills in seconds! No more standing in long queues for utilities. I also love how easy it is to split costs with friends.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Kamal Hossain",
    role: "Online Shop Owner",
    image: "/images/testimonials/kamal.jpg",
    review:
      "Integrating BD PAY with my e-commerce store was simple and quick. My sales increased by 30% as customers prefer the smooth checkout experience!",
    rating: 4,
  },
  {
    id: 4,
    name: "Shamima Akter",
    role: "Freelancer",
    image: "/images/testimonials/shamima.jpg",
    review:
      "As a freelancer, BD PAY helps me receive international payments quickly and securely. I no longer worry about delays, and it gives me more time to focus on my work.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hasan Chowdhury",
    role: "Restaurant Owner",
    image: "/images/testimonials/hasan.jpg",
    review:
      "BD PAY has made managing my restaurant much easier. Customers pay through QR codes and I track all transactions in real-time. It’s reliable and super convenient.",
    rating: 4.5,
  },
];

const testimonialsBN: Testimonial[] = [
  {
    id: 1,
    name: "রাহিম আহমেদ",
    role: "ক্ষুদ্র ব্যবসার মালিক",
    image: "/images/testimonials/rahim.jpg",
    review:
      "বিডি পে আমার ব্যবসা পরিচালনার ধরণ বদলে দিয়েছে। এখন আমি সহজেই পেমেন্ট গ্রহণ করতে পারি এবং আমার গ্রাহকরাও এই সুবিধা খুব পছন্দ করে। রিয়েল-টাইম সেলস ট্র্যাকিং সত্যিই অসাধারণ!",
    rating: 5,
  },
  {
    id: 2,
    name: "নুসরাত জাহান",
    role: "বিশ্ববিদ্যালয়ের শিক্ষার্থী",
    image: "/images/testimonials/nusrat.jpg",
    review:
      "বিডি পে আমার জীবন অনেক সহজ করেছে, কয়েক সেকেন্ডেই বিল পরিশোধ করি! আর লাইনে দাঁড়িয়ে ইউটিলিটি বিল দেওয়ার ঝামেলা নেই। বন্ধুদের সঙ্গে খরচ ভাগ করাও খুব সহজ।",
    rating: 4.5,
  },
  {
    id: 3,
    name: "কামাল হোসেন",
    role: "অনলাইন শপ মালিক",
    image: "/images/testimonials/kamal.jpg",
    review:
      "আমার ই-কমার্স স্টোরের সাথে বিডি পে ইন্টিগ্রেট করা ছিল খুব সহজ এবং দ্রুত। আমার বিক্রি ৩০% বেড়েছে কারণ গ্রাহকরা স্মুথ চেকআউট অভিজ্ঞতা পছন্দ করে!",
    rating: 4,
  },
  {
    id: 4,
    name: "শামীমা আক্তার",
    role: "ফ্রিল্যান্সার",
    image: "/images/testimonials/shamima.jpg",
    review:
      "একজন ফ্রিল্যান্সার হিসেবে, বিডি পে আমাকে আন্তর্জাতিক পেমেন্ট দ্রুত এবং নিরাপদভাবে গ্রহণ করতে সাহায্য করে। আর দেরির চিন্তা করতে হয় না, এতে আমি কাজে বেশি সময় দিতে পারি।",
    rating: 5,
  },
  {
    id: 5,
    name: "হাসান চৌধুরী",
    role: "রেস্টুরেন্ট মালিক",
    image: "/images/testimonials/hasan.jpg",
    review:
      "বিডি পে আমার রেস্টুরেন্ট পরিচালনা অনেক সহজ করেছে। গ্রাহকরা কিউআর কোড দিয়ে পেমেন্ট করে এবং আমি রিয়েল-টাইমে সব লেনদেন ট্র্যাক করি। এটি নির্ভরযোগ্য এবং খুবই সুবিধাজনক।",
    rating: 4.5,
  },
];
