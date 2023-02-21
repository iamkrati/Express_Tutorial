const inp=document.getElementById('inp');
const btn=document.getElementById('btn');
const list=document.getElementById('list');

function refresh(){
    $.get('/todos',function(data){

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        for( let d of data)
        {
            el = document.createElement('li');
             el.innerHTML = `${d}`;
              list.appendChild(el);
            // list.appendChild(`<li>${d}</li>`);
        }
    })
}
refresh();

btn.addEventListener('click',function(e){
    // e.preventDefault();
    const todo=inp.value;
    // console.log(todo);
   $.post('/todos',{todo},function(res){
    console.log(res);
       refresh();
   });
})