
const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=> res.json())
    .then(data => showCategories(data.data))
}
const showCategories = data =>{
    console.log(data)
const categoriesContainer =  document.getElementById('categories-container');
data.news_category.forEach(singleCategory =>{
    //console.log(singleCategory);
    //system-1
    categoriesContainer.innerHTML +=`<a class ="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}','${singleCategory.category_name}')">
    ${singleCategory.category_name}</a>`;

    //system-2
    // const linkContainer = document.createElement('p');
    // linkContainer.innerHTML = `<a class ="nav-link" href="#">${singleCategory.category_name}</a>`;
    // categoriesContainer.appendChild(linkContainer);
})
}

//fetch all news available in a category,
const fetchCategoryNews = (category_id, category_name) => {
    //console.log(category_id);
    const URL = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(URL);
    fetch(URL).then(res => res.json()).then(data => showAllNews(data.data, category_name));

}

const showAllNews = (data, category_name) => {
    console.log(data, category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText =category_name;
    const singleNewsContainer = document.getElementById('all-news'); 
        singleNewsContainer.innerHTML = '';
    data.forEach(singleNews =>{

        console.log(singleNews.details);
        //console.log(singleNews);
       const card = document.createElement('div');
       card.classList.add('card');
       card.innerHTML= `
       <div class="row g-0">
            <div class="col-md-4">
                <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 d-flex flex-column">
                <div class="card-body">
                  <h5 class="card-title">Title:  ${singleNews.title}</h5>
                  <p class="card-text">${singleNews.details.slice(0, 300)} .....</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div class="card-footer border-0 bg-body">
                    <div class="d-flex g-2">
                        <img src="${singleNews.author.img}" class="img-fluid rounded-circle" alt="..." height="40"width="40">
                        <div class="ms-4">
                            <p class ="m-0 p-0">${singleNews.author.name}</p>
                            <p class ="m-0 p-0">${singleNews.author.published_date}</p>
                        </div>     
                    </div>
                    <div class="d-flex align-items-center">
                        
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
       `;
       singleNewsContainer.appendChild(card);
       
    })
}

