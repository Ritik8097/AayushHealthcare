import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Blog6 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const handleBack = () => {
        window.history.back();
      };

  return (
    <>
    <Header/>
    <div className="pt-40 px-6  bg-gray-100 text-gray-900  flex justify-center"
     style={{
      backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-pastel-blue-paint-brushstroke-textured-background_53876-108403.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
  }}>
    <button
          className="absolute top-[100px] left-4 md:hidden z-20 w-8 h-8 flex justify-center items-center"
          onClick={handleBack}
        >
          <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate- 45"></div>
        </button>
    <div className="max-w-3xl w-full">

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4" >  Top 7 Ayurvedic Ingredients to Improve Focus and Mental Clarity</h1>
            <img src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490"/>
             <p className="mb-4">
        In today's fast-paced world, maintaining focus and mental clarity can be challenging. Whether it's juggling work, studies, or personal commitments, distractions are everywhere. Fortunately, nature offers a variety of herbal remedies that can enhance cognitive function, boost concentration, and promote mental well-being. In this blog, we'll explore the top 7 herbal remedies that can help improve focus and mental clarity, naturally.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Ginkgo Biloba: The Brain Booster</h2>
      <p className="mb-2">
        Ginkgo Biloba is one of the oldest living tree species and a powerhouse for brain health. Known for its ability to improve blood circulation to the brain, it enhances memory, attention span, and cognitive speed. Rich in antioxidants, Ginkgo helps reduce oxidative stress, which can negatively affect mental performance.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Ginkgo is available in capsule, tablet, and tea forms. A daily dose of 120-240 mg is often recommended for optimal cognitive benefits.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Bacopa Monnieri: The Memory Enhancer</h2>
      <p className="mb-2">
        Also known as Brahmi, Bacopa Monnieri has been used in Ayurvedic medicine for centuries to boost brain function. It enhances memory, reduces anxiety, and improves attention by supporting neurotransmitter function and reducing inflammation.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Bacopa is commonly available in capsules, powders, and teas. Regular intake for at least 4-6 weeks is recommended to notice significant improvements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Rhodiola Rosea: The Adaptogenic Ally</h2>
      <p className="mb-2">
        Rhodiola Rosea, often called the "golden root," is an adaptogen that helps the body manage stress. It reduces mental fatigue, enhances focus, and improves overall cognitive performance, especially during stressful situations.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Rhodiola supplements are widely available in capsules or extracts. A dose of 200-600 mg per day is effective for mental clarity and energy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Ashwagandha: The Stress Buster</h2>
      <p className="mb-2">
        Ashwagandha, another powerful adaptogen from Ayurvedic medicine, is known for its stress-reducing properties. By lowering cortisol levels, it helps reduce anxiety, improve mood, and enhance focus and concentration.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Ashwagandha is available as a powder, capsule, or tincture. A daily dose of 300-500 mg is effective for cognitive benefits.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Gotu Kola: The Cognitive Calmer</h2>
      <p className="mb-2">
        Gotu Kola, often referred to as the "herb of longevity," supports mental clarity, memory, and focus. It promotes better circulation, reduces anxiety, and enhances brain function without causing jitteriness.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Gotu Kola can be consumed as tea, capsules, or extracts. Drinking Gotu Kola tea regularly can significantly improve mental performance.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Green Tea: The Natural Stimulant</h2>
      <p className="mb-2">
        Green tea is rich in L-theanine and caffeine, a combination that improves brain function, attention, and reaction time. L-theanine promotes relaxation without drowsiness, balancing the stimulating effects of caffeine.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Drinking 2-3 cups of green tea daily can boost mental clarity. For a more concentrated dose, consider green tea extracts.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Peppermint: The Refreshing Focus Enhancer</h2>
      <p className="mb-2">
        Peppermint is more than just a refreshing herb; it has cognitive-enhancing properties. Inhaling peppermint essential oil or drinking peppermint tea can improve alertness, concentration, and memory.
      </p>
      <p className="mb-4 font-medium">How to Use:</p>
      <p className="mb-4">
        Add a few drops of peppermint essential oil to a diffuser or enjoy a cup of peppermint tea whenever you need a mental boost.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Final Thoughts</h2>
      <p className="mb-4">
        While these herbal remedies can significantly improve focus and mental clarity, it's essential to maintain a balanced lifestyle for optimal cognitive health. Regular exercise, proper sleep, a nutritious diet, and stress management are key components of mental well-being.
      </p>
      <p className="text-sm text-gray-600 italic">
        Disclaimer: Always consult with a healthcare professional before starting any new supplement, especially if you have underlying health conditions or are taking medication.
      </p>
            </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog6;
