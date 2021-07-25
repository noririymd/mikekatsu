if (document.URL.match( "/portfolios/new" ) || document.URL.match( "/portfolios/edit" )) {
  document.addEventListener('DOMContentLoaded', function() {

      const ImageList = document.getElementById('image-upload')
      const portfolioPreview = document.getElementById('portfolio-preview')

      const createImageHTML = (blob) => {
        // 画像を表示するためのdiv要素を生成
        const imageElement = document.createElement('div')
        imageElement.setAttribute('class', 'image-box')
        
        // 表示する画像を生成
        const blobImage = document.createElement('img')
        blobImage.setAttribute('src', blob)
        blobImage.setAttribute('class', 'image-file')
        
        //編集ボタン
        const HTML = ` <div class="edit-btn" id="edit-btn">編集</div>`;
          // 生成したHTMLの要素をブラウザに表示させる
          imageElement.appendChild(blobImage);
          imageElement.insertAdjacentHTML("beforeend", HTML);
          portfolioPreview.insertBefore(imageElement, ImageList);

        //要素を5つまで取得可能
        if(document.querySelectorAll(".image-box").length == 5){
          ImageList.remove()
          portfolioPreview.style.margin = "0px 0px 1rem 0px";
        };
      };
    

    const ImageFile = document.getElementById('formFile')
    document.getElementById('image-upload').addEventListener('click', () => {
      ImageFile.click()
    });
      ImageFile.addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createImageHTML(blob)
    });

    //削除ボタン
    // const deleteButton = document.getElementById('edit-btn')
    // deleteButton.addEventListener('click', () => {
    //   deleteButton.remove();
    // });
  });
};