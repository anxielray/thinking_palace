// /js/articles.js

const articles = [
    {
      title: "Prime Numbers Distribution",
      subtitle: "The Untouchables of Math: Unlocking the Power of Primes.",
      link: "article-prime.html",
      image: "https://www.3blue1brown.com/content/lessons/2019/prime-spirals/galactic_zoomout.png"
    },
    {
      title: "Pascal's Triangle",
      subtitle: "Explaining the logic underscheming the Binomial Expansion methodology.",
      link: "pascals.html",
      image: "https://www.futilitycloset.com/wp-content/uploads/2016/07/2016-07-14-a-square-triangle.png"
    }
  ];
  
  const container = document.getElementById('articles-container');
  
  articles.forEach(({ title, subtitle, link, image }) => {
    const article = document.createElement('article');
    article.className = "group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-600 transition-shadow duration-300";
  
    article.innerHTML = `
      <img src="${image}" alt="${title}" class="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <a href="${link}">
        <div class="p-6">
          <h2 class="text-xl font-semibold text-white">${title}</h2>
          <p class="mt-2 text-gray-400 text-sm">${subtitle}</p>
        </div>
      </a>
    `;
  
    container.appendChild(article);
  });
  