const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian) =>
    {
        const icon = accordian.querySelector('.icon');
        const answer = accordian.querySelector('.answer')

    accordian.addEventListener('click',()=>
    {
        if(icon.classList.contains('active'))
        {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else
        {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})

// const date = new Date();

// alert(date.toDateString());

// const suscribe = document.getElementById('upperArrow');

// suscribe.addEventListener('click',()=>
// {
//     alert('you have been clicked on What is web development',suscribe);
// })

/*
function mouseOver()
{
    alert('mouseOver on How can you become a web developer ?')
}
*/