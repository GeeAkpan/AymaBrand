export function blogCard(title, summary, date, image, url) {
  return `  <div class="blog-item">
            <div class="blog-img">
              <img src="${image ||"#"}" alt="">
              <span><i class="far fa-heart"></i></span>
            </div>
            <div class="blog-text">
              <span>${date ||"Loading..."}</span>
              <h2>${title||"Loading"}</h2>
              <p>${summary||"Loading..."}</p>
              <a href="${url || "#"}">Read More</a>
            </div>
          </div>`
}