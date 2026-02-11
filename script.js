// بيانات المنتجات (يمكنك التعديل والإضافة هنا)
const products = [
    {
        id: 1,
        name: "منظم مكتب جلدي فاخر",
        price: "150 SAR",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        category: "office"
    },
    {
        id: 2,
        name: "حامل هاتف للسيارة مغناطيسي",
        price: "85 SAR",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        category: "car"
    },
    {
        id: 3,
        name: "إضاءة LED ذكية للمكتب",
        price: "120 SAR",
        image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&w=600&q=80",
        category: "home"
    },
    {
        id: 4,
        name: "حقيبة لابتوب جلدية - Midnight",
        price: "299 SAR",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        category: "accessories"
    }
];

// رقم واتساب الخاص بك (تأكد من كتابته بصيغة دولية بدون +)
const whatsappNumber = "966500000000"; 

// دالة عرض المنتجات
function displayProducts() {
    const container = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">${product.price}</span>
                <button onclick="orderViaWhatsapp('${product.name}', '${product.price}')" class="btn-buy">
                    <i class="fab fa-whatsapp"></i> اطلب عبر واتساب
                </button>
            </div>
        `;
        
        container.appendChild(productCard);
    });
}

// دالة الطلب عبر واتساب
function orderViaWhatsapp(name, price) {
    const message = `مرحباً متجر رحال، أرغب بطلب المنتج التالي:%0a*المنتج:* ${name}%0a*السعر:* ${price}%0aيرجى تأكيد الطلب.`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', displayProducts);