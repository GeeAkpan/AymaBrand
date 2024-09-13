export function designCard(title, image, likeCount, url) {
  return `
      <div class="design-item">
            <div class="design-img">
              <img src="${image||"#"}" alt="">
              <span><i class="far fa-heart"></i> ${likeCount||"-"}</span>
              <span>AYMA</span>
            </div>
            <div class="design-title">
              <a href="${url||"#"}">${title||"Loading..."}</a>
            </div>
          </div>`
}