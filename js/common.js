$(function(){
    $(".p_box > a").click(function(event){
        event.preventDefault(); // 태그가 가지고 있는 기본 이벤트 초기화 
        var className = $(this).attr('class'); // 내가 클릭한 요소의 클래스 네임 가져오기 
        popupOpen(className); // 클래스 네임을 인자로 넣어서 함수 호출 
    });
});
// 팝업 열기 기능
function popupOpen(item){
 $(".popup div." + item).show(); // 내가 인자로 넣은 클래스 네임을 가지고 있는 요소 보여주기
 console.log(item);
}
