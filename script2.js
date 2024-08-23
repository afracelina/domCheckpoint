document.addEventListener('DOMContentLoaded', () => {

    var totalprice = document.getElementById('total-price');
    var products = document.querySelectorAll('.product');
    var likes = document.querySelectorAll('i');

    products.forEach(product => {
        const quantity = product.querySelector('.quantity');
        const inc = product.querySelector('.increment');
        const dec = product.querySelector('.decrement');

        inc.addEventListener('click', () => {
            let q = parseInt(quantity.textContent);
            q++;
            quantity.textContent = q;
            updateTotalPrice();
        });

        dec.addEventListener('click', () => {
            let q = parseInt(quantity.textContent);
            if (q > 0) {
                q--;
                quantity.textContent = q;
                updateTotalPrice();
            }
        });
    });

    function updateTotalPrice() {
        let total = 0;
        products.forEach(product => {
            const price = parseFloat(product.getAttribute('data-value'));
            const quantity = parseInt(product.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalprice.textContent = total;
    }
    likes.forEach(like => {
        like.addEventListener('click', ()=> {
            let att= like.getAttribute('class');
            if(att == 'bi bi-heart'){
                like.setAttribute('class','bi bi-heart-fill');
            }
            else{
                like.setAttribute('class','bi bi-heart');
            }
        });
    });


    const deletes = document.querySelectorAll('.del');
    deletes.forEach(del =>{
        del.addEventListener('click', ()=>{
            var b=confirm('Are you sure you want to delete this article?');
            if(b){
              var  parent = document.getElementsByClassName('products');
              var child = del.closest('.product');
              parent.removeChild(child);
            }
        });
    });

});
