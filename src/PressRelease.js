import React from 'react';
import Header from './Header';
import NewFooter from './NewFooter';

function PressRelease() {
  const articles = [
    {
      date: "14/06/2024",
      publication: "apnnews.com",
      link: "https://www.apnnews.com/aayush-food-and-herbs-ltd-transforms-into-aayush-wellness-ltd-to-lead-innovations-in-wellness-health-care/",
      headline: "Aayush Food and Herbs Ltd. transforms into Aayush Wellness Ltd. to lead Innovations in Wellness & Health Care"
    },
    {
      date: "13/06/2024",
      publication: "ntmedia.in",
      link: "https://ntmedia.in/aayush-food-and-herbs-ltd-transforms-into-aayush-wellness-ltd/",
      headline: "Aayush Food and Herbs Ltd. transforms into Aayush Wellness Ltd. to lead Innovations in Wellness & Health Care"
    },
    {
      date: "13/06/2024",
      publication: "indiannewz.wordpress.com",
      link: "https://indiannewz.wordpress.com/2024/06/13/aayush-food-and-herbs-ltd-transforms-into-aayush-wellness-ltd-to-lead-innovations-in-wellness-health-care/",
      headline: "Aayush Food and Herbs Ltd. transforms into Aayush Wellness Ltd. to lead Innovations in Wellness & Health Care"
    },
    {
      date: "13/06/2024",
      publication: "webnewswire.com",
      link: "https://www.webnewswire.com/2024/06/13/aayush-food-and-herbs-ltd-transforms-into-aayush-wellness-ltd-to-lead-innovations-in-wellness-health-care/",
      headline: "Aayush Food and Herbs Ltd. transforms into Aayush Wellness Ltd. to lead Innovations in Wellness & Health Care"
    },
    {
      date: "14/06/2024",
      publication: "news.how2shout.com",
      link: "https://news.how2shout.com/aayush-food-and-herbs-ltd-transforms-into-aayush-wellness-ltd/",
      headline: "Aayush Food and Herbs Ltd. transforms into Aayush Wellness Ltd. to lead Innovations in Wellness & Health Care"
    },
    {
      date: "14/06/2024",
      publication: "mediabrief.com",
      link: "https://mediabrief.com/aayush-food-and-herbs-rebrands-to-aayush-wellness/",
      headline: "Aayush Food and Herbs Ltd. transforms into Aayush Wellness Ltd. to lead Innovations in Wellness & Health Care"
    },
    {
      date: "20/06/2024",
      publication: "thehindubusinessline.com",
      link: "https://www.thehindubusinessline.com/markets/stocks-that-will-see-action-today-20-june-2024/article68310583.ece",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "business-standard.com",
      link: "https://www.business-standard.com/markets/capital-market-news/board-of-aayush-food-and-herbs-approves-stock-split-and-increase-in-authorised-capital-124061900702_1.html",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "thehindu.com",
      link: "https://www.thehindu.com/business/aayush-wellness-board-approves-stock-split/article68308568.ece",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "uniindia.com",
      link: "https://www.uniindia.com/aayush-wellness-initiates-10-for-1-stock-split-unveils-esop-to-drive-growth/business-economy/news/3223552.html#:~:text=Mumbai%2C%20June%2019%20(UNI),presence%20and%20enhance%20shareholder%20value",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "pninews.com",
      link: "https://www.pharmabiz.com/NewsDetails.aspx?aid=169819&sid=2",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "pharmabiz.com",
      link: "https://www.apnnews.com/aayush-wellness-limited-board-approved-10-for-1-stock-split-and-esop/",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "20/06/2024",
      publication: "apnnews.com",
      link: "https://www.publicnow.com/view/BD4CDE649BF94891AD55F543190C8E9C2899025C?1718804768",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "publicnow.com",
      link: "https://www.dsij.in/dsijarticledetail/101-split-announcement-heavy-buying-stock-gains-over-600-per-cent-in-just-6-months-complete-details-inside-39082",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "dsij.in",
      link: "https://www.research360.in/stocks/aayush-food-and-herbs-ltd",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "theresearch360.in",
      link: "https://www.integratedmaster.com/News/Detailed-News/Board-of-Aayush-Food-And-Herbs-approves-stock-split-and-increase-in-authorised-capital/Corporate-News/1520880/23",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "integratedmaster.com",
      link: "https://businessnewsthisweek.com/health/aayush-wellness-limited-board-approved-10-for-1-stock-split-and-esop/amp/",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "20/06/2024",
      publication: "businessnewsthisweek.com",
      link: "https://biznewsdesk.com/health/aayush-wellness-limited-board-approved-10-for-1-stock-split-and-esop/",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "20/06/2024",
      publication: "biznewsdesk.com",
      link: "https://pulsexpertech.com/health/aayush-wellness-limited-board-approved-10-for-1-stock-split-and-esop/",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "20/06/2024",
      publication: "pulsexpertech.com",
      link: "https://ntmedia.in/aayush-wellness-limited-board-approved-stock-split/",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "19/06/2024",
      publication: "ntmedia.in",
      link: "https://nuffoodsspectrum.in/2024/06/21/aayush-wellness-approves-10-for-1-stock-split-and-esop.html",
      headline: "Aayush Wellness Limited Board approved 10-for-1 Stock Split and ESOP"
    },
    {
      date: "21/06/2024",
      publication: "nuffoodsspectrum.in",
      link: "https://www.uniindia.com/aayush-wellness-launches-herbal-gutka-and-pan-masala/india/news/3226548.html",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "uniindia.com",
      link: "https://www.moneyworks4me.com/company/news/index/id/663687",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "moneyworks4me.com",
      link: "https://nuffoodsspectrum.in/2024/06/25/aayush-wellness-launches-herbal-pan-masala-gutka.html",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "25/06/2024",
      publication: "nuffoodsspectrum.in",
      link: "https://spicystarsmumbai.blogspot.com/2024/06/post_853.html",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "spicystarsmumbai.blogspot.com",
      link: "http://www.citrusinteractive.in/News/OpenNewsContent.aspx?SecId=12&SubSecID=51&NewsID=1100890",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "citrusinteractive.in",
      link: "https://m-english.webdunia.com/article/national-news/aayush-wellness-launches-herbal-gutka-and-pan-masala-124062400025_1.html?amp=1",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "25/06/2024",
      publication: "m-english.webdunia.com",
      link: "https://business-news-today.com/aayush-wellness-introduces-tobacco-free-herbal-pan-masala/",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "m-business-news-today.com",
      link: "https://www.marketscreener.com/quote/stock/AAYUSH-FOOD-AND-HERBS-LIM-103499797/news/Aayush-Wellness-Introduces-Herbal-Product-Pan-Masala-and-Gutka-Shares-Climb-3-47027026/",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "marketscreener.com",
      link: "https://www.sharesbazaar.com/news/view/1100905",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "24/06/2024",
      publication: "sharesbazaar.com",
      link: "https://www.sharesbazaar.com/news/view/1100905",
      headline: "Aayush Wellness launches herbal pan masala & gutka no tobacco & no supari"
    },
    {
      date: "04/07/2024",
      publication: "pninews.com",
      link: "https://www.pninews.com/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "medianews4u.com",
      link: "https://www.medianews4u.com/aayush-wellness-limited-launches-online-platform-for-nationwide-accessibility/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "businessnewsweek.in",
      link: "https://businessnewsweek.in/news/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "businessnewsmatters.com",
      link: "https://businessnewsmatters.com/news/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "nationalbiznews.com",
      link: "https://nationalbiznews.com/news/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "quickbiznews.com",
      link: "https://quickbiznews.com/news/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "businessnewsthisweek.com",
      link: "https://businessnewsthisweek.com/news/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    },
    {
      date: "04/07/2024",
      publication: "tennews.in",
      link: "https://tennews.in/aayush-wellness-limited-introduces-online-platform-to-enhance-accessibility-and-reach-pan-india/",
      headline: "Aayush Wellness Limited introduces online platform to enhance accessibility and reach pan India"
    }
  ];

  return (
    <>
    <Header/>
    <div className="bg-white text-gray-900 pt-[85px]">
      <div className="max-w-3xl mx-auto mt-10 pl-[25px] pr-[25px]">
        {articles.map((article, index) => (
          <div className="mb-8 " key={index}>
            <h2 style={{color:'rgb(112, 112, 112)'}} className=" font-normal">
              {article.headline}
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="bg-indigo-100  text-indigo-600 font-semibold px-2 py-1 rounded-full">
                {article.publication}
              </a>
              <span className="ml-4">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <NewFooter/>
    </>
  );
}

export default PressRelease;
