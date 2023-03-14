let myh1 = document.querySelector("h1");
let myimage = document.querySelector("img");

// 이벤트, 리스너
myh1.addEventListener("click", () => {
    myh1.textContent = "My name is Jae Yeon"

});

// 1. html 이미지를 자바스크립트로 가져오기
// 2. 변수에 저장
// 3. 클릭 이벤트 리스너를 추가한다

myimage.addEventListener("click", () => {
    if (myimage.getAttribute("src") == "C:/Users/kitri/Pictures/꼬부기.jpg") {
        myimage.setAttribute("src", "C:/Users/kitri/Pictures/어니부기.jpg");
    } else if (myimage.getAttribute("src") == "C:/Users/kitri/Pictures/어니부기.jpg") {
        myimage.setAttribute("src", "C:/Users/kitri/Pictures/거북왕.jpg");
    } else if (myimage.getAttribute("src") == "C:/Users/kitri/Pictures/거북왕.jpg") {
        myimage.setAttribute("src", "C:/Users/kitri/Pictures/꼬부기.jpg");
    }
});
