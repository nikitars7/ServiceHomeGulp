export const fetchBlog = () => {
  const blogItems = document.querySelector(".blog__items");
  if (blogItems) {
    fetchingItems();
  }
  async function fetchingItems() {
    try {
      const response = await fetch("files/blog.json");
      const data = await response.json();
      initBlog(data,3);
    } catch (e) {
      console.warn(e.message);
    }
  }
  function initBlog(data,counter) {
    for (let index = 0; index < counter; index++) {
      const item = data.items[index];
      buildBlogItem(item);
    }
  }
  function buildBlogItem(item) {
    let itemBlog = ``;
    itemBlog += `<article data-id='${item.id}' class="blog__item item-blog">`;

    item.image
      ? (itemBlog += `<a href="" class="item-blog__image ibg">
     <img src="${item.image}" alt="image" />
  </a>`)
      : null;

    itemBlog += `<div class="item-blog__date">${item.date}</div>`;

    item.title
      ? (itemBlog += `<h4 class="item-blog__title">
                <a href="" class="item-blog__title-link">${item.title}</a >
               </h4>`)
      : null;
    itemBlog += `<div class="item-blog__text">
  ${item.text}
</div>`;
    if (item.tags) {
      itemBlog += `<div class="item-blog__tags">`;
      for (const tag in item.tags) {
        itemBlog += `<a href="" class="item-blog__tag">${tag}</a>`;
      }
      itemBlog += `</div>`;
    }
    itemBlog += `</article>`;
    blogItems.insertAdjacentHTML("beforeend", itemBlog);
  }
  document.addEventListener('click',addMoreItems);
  function addMoreItems(e){
   e.preventDefault();
   if(e.target.closest('.blog__view-more')){
    initBlog(data,6)
   }
  }
};
