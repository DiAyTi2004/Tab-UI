let tabs= document.querySelectorAll( '.tab' );
tabs= Array.from( tabs);
let tabcontents= document.querySelectorAll( '.tab__content' );
tabContents= Array.from( tabcontents );
function handleChoseTab( tab, index){
    document.querySelector( '.tab--active').classList.remove( 'tab--active' );
    tab.classList.add( 'tab--active' );
    document.querySelector( '.tab__content--active' ).classList.remove( 'tab__content--active' );
    tabContents[index].classList.add( 'tab__content--active' );
}
tabs.forEach( function( tab, index){
    tab.onclick = function(){
        handleChoseTab( tab, index);
    }
})