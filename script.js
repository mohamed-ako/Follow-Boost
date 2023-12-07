function openWhatsApp() {
    // Replace the phone number with the desired WhatsApp number
    const phoneNumber = '+905445518883';

    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
}

function scrollToSection() {
    const section2 = document.getElementById('about');
    section2.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {

    let money, spanText, h2, egalValue; // Declare these variables outside the event listeners
    let instaC = document.querySelector('.instaC');

    document.querySelector(".toggle-btn").addEventListener("click", () => {
        document.querySelector(".drop_down").classList.toggle('visible');
    });



    var moreInfoDivINSTA = document.querySelector('#moreInfoINSTA');
    var moreInfoDivTIK = document.querySelector('#moreInfoTIK');
    var moreInfoDivYTB = document.querySelector('#moreInfoYTB');
    var moreInfoDivFB = document.querySelector('#moreInfoFB');

    /////////////////// INSTAGRAM : //////////////////////////////

    document.querySelector(".instaS").addEventListener("click", () => {
        const moreInfoDivINSTA = document.querySelector('.instaC');
        moreInfoDivINSTA.style.backgroundImage = 'linear-gradient(90deg, #e64980 5%, #ff8787 95%)';
        moreInfoDivINSTA.classList.toggle('visible');
        moreInfoDivINSTA.style.height = '100svh';
        document.querySelector('.fbC').classList.remove('visible');
        document.querySelector('.tikC').classList.remove('visible');
        document.querySelector('.ytbC').classList.remove('visible');
        // document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });

        document.querySelector('.insideSocialINSTA').innerHTML = '';
    });

    document.querySelector(".INSTAsub").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivINSTA = document.querySelector('.instaC');
        const h2Element = document.querySelector('.INSTAh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialINSTA').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivINSTA.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 20;
                const displayElement = moreInfoDivINSTA.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".INSTAviews").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivINSTA = document.querySelector('.instaC');
        const h2Element = document.querySelector('.INSTAh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialINSTA').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivINSTA.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 5;
                const displayElement = moreInfoDivINSTA.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".INSTAlike").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivINSTA = document.querySelector('.instaC');
        const h2Element = document.querySelector('.INSTAh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialINSTA').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivINSTA.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 5;
                const displayElement = moreInfoDivINSTA.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".INSTAcom").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivINSTA = document.querySelector('.instaC');
        const h2Element = document.querySelector('.INSTAh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialINSTA').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivINSTA.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 10;
                const displayElement = moreInfoDivINSTA.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".INSTAshare").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivINSTA = document.querySelector('.instaC');
        const h2Element = document.querySelector('.INSTAh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialINSTA').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivINSTA.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 100;
                const displayElement = moreInfoDivINSTA.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector('.upINSTA').addEventListener('click', function () {
        const moreInfoDivINSTA = document.querySelector('.instaC');

        // List of elements to clear
        const elementsToClear = ['.insideSocialFB', '.insideSocialINSTA', '.insideSocialTIK', '.insideSocialYTB'];

        // Loop through elements and clear their content
        elementsToClear.forEach(selector => {
            document.querySelector(selector).innerHTML = '';
        });
        moreInfoDivINSTA.classList.remove('visible');

        moreInfoDivINSTA.classList.add('hide');
    });
    /////////////////// FACEBOOK : //////////////////////////////

    document.querySelector(".fbS").addEventListener("click", () => {


        const moreInfoDivFB = document.querySelector('.fbC');
        moreInfoDivFB.style.backgroundImage = 'linear-gradient(90deg, #4481eb 10%, #04befe 90%)';
        moreInfoDivFB.classList.toggle('visible');
        moreInfoDivFB.style.height = '100vh';
        document.querySelector('.instaC').classList.remove('visible');
        document.querySelector('.tikC').classList.remove('visible');
        document.querySelector('.ytbC').classList.remove('visible');
        document.querySelector('.insideSocialFB').innerHTML = '';
        // document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });

    });

    document.querySelector(".FBsub").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivFB = document.querySelector('.fbC');
        const h2Element = document.querySelector('.FBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialFB').innerHTML = `
<div class='info2'>
    <div class='insideInfo'>
        <div class="quantity-input">
            <input class='egal' type='number' value="" min="1">K
        </div>
        <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
    </div>
    <div class='egal-display'></div>
</div>`;

        moreInfoDivFB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 10;
                const displayElement = moreInfoDivFB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
            <table class='egalTBL'>
                <tr>
                    <td>بثمن ${money} درهم</td>
                    <td>من ${spanText}</td>
                    <td>${egalValue}K</td>
                </tr>
                <tr>
                    <td colspan="3">
                        <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                    </td>
                </tr>
            </table><br>
            <button class='wtsp'>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">أتمم الطلب</span>
            </button>`;
                }
            }
        });
    });


    document.querySelector(".FBviews").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivFB = document.querySelector('.fbC');
        const h2Element = document.querySelector('.FBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialFB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivFB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 15;
                const displayElement = moreInfoDivFB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".FBlike").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivFB = document.querySelector('.fbC');
        const h2Element = document.querySelector('.FBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialFB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivFB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 20;
                const displayElement = moreInfoDivFB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".FBcom").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivFB = document.querySelector('.fbC');
        const h2Element = document.querySelector('.FBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialFB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivFB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 10;
                const displayElement = moreInfoDivFB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".FBshare").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivFB = document.querySelector('.fbC');
        const h2Element = document.querySelector('.FBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialFB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivFB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 100;
                const displayElement = moreInfoDivFB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector('.upFB').addEventListener('click', function () {
        const moreInfoDivFB = document.querySelector('.fbC');
        const elementsToClear = ['.insideSocialFB', '.insideSocialINSTA', '.insideSocialTIK', '.insideSocialYTB'];

        // Loop through elements and clear their content
        elementsToClear.forEach(selector => {
            document.querySelector(selector).innerHTML = '';
        });
        moreInfoDivFB.classList.remove('visible');

        moreInfoDivFB.classList.add('hide');
    });


    /////////////////// TIKTOK : //////////////////////////////

    document.querySelector(".tikS").addEventListener("click", () => {
        const moreInfoDivINSTA = document.querySelector('.tikC');
        moreInfoDivINSTA.style.backgroundImage = 'linear-gradient(180deg, rgba(12, 0, 0, 0.93) 59%, rgba(134, 0, 76, 0.75) 100%)';
        moreInfoDivINSTA.classList.toggle('visible');
        moreInfoDivINSTA.style.height = '100vh';
        document.querySelector('.instaC').classList.remove('visible');
        document.querySelector('.fbC').classList.remove('visible');
        document.querySelector('.ytbC').classList.remove('visible');
        // document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });

        document.querySelector('.insideSocialINSTA').innerHTML = '';
    });


    document.querySelector(".TIKsub").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivTIK = document.querySelector('.tikC');
        const h2Element = document.querySelector('.TIKh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialTIK').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivTIK.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 20;
                const displayElement = moreInfoDivTIK.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".TIKviews").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivTIK = document.querySelector('.tikC');
        const h2Element = document.querySelector('.TIKh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialTIK').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivTIK.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 2;
                const displayElement = moreInfoDivTIK.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".TIKlike").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivTIK = document.querySelector('.tikC');
        const h2Element = document.querySelector('.TIKh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialTIK').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivTIK.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 20;
                const displayElement = moreInfoDivTIK.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".TIKcom").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivTIK = document.querySelector('.tikC');
        const h2Element = document.querySelector('.TIKh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialTIK').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivTIK.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 45;
                const displayElement = moreInfoDivTIK.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".TIKshare").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivTIK = document.querySelector('.tikC');
        const h2Element = document.querySelector('.TIKh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialTIK').innerHTML = `هذه الخدمة ليست متوفرة بعد`
        // <div class='info2'>
        //     <div class='insideInfo'>
        //         <div class="quantity-input">
        //             <input class='egal' type='number' value="" min="1">K
        //         </div>
        //         <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        //     </div>
        //     <div class='egal-display'></div>
        // </div>`;

        moreInfoDivTIK.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 40;
                const displayElement = moreInfoDivTIK.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector('.upTIK').addEventListener('click', function () {
        const moreInfoDivTIK = document.querySelector('.tikC');
        const elementsToClear = ['.insideSocialFB', '.insideSocialINSTA', '.insideSocialTIK', '.insideSocialYTB'];

        // Loop through elements and clear their content
        elementsToClear.forEach(selector => {
            document.querySelector(selector).innerHTML = '';
        });
        moreInfoDivTIK.classList.remove('visible');

        moreInfoDivTIK.classList.add('hide');
    });


    /////////////////// YOUTUBE : //////////////////////////////

    document.querySelector(".ytbS").addEventListener("click", () => {
        const moreInfoDivINSTA = document.querySelector('.ytbC');
        moreInfoDivINSTA.style.backgroundImage = 'linear-gradient(180deg, rgba(225, 0, 0, 0.74) 50%, rgba(125, 45, 45, 0.78) 100%)';
        moreInfoDivINSTA.classList.toggle('visible');
        moreInfoDivINSTA.style.height = '100vh';
        document.querySelector('.instaC').classList.remove('visible');
        document.querySelector('.tikC').classList.remove('visible');
        document.querySelector('.fbC').classList.remove('visible');
        // document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });

        document.querySelector('.insideSocialINSTA').innerHTML = '';
    });


    document.querySelector(".YTBsub").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivYTB = document.querySelector('.ytbC');
        const h2Element = document.querySelector('.YTBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialYTB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivYTB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 15;
                const displayElement = moreInfoDivYTB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".YTBviews").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivYTB = document.querySelector('.ytbC');
        const h2Element = document.querySelector('.YTBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialYTB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="40">K
            </div>
            <p>
                    أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف || 
                    
                    اقل عدد يمكن ادخاله هو 40,000
                        </p>
            
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivYTB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 11.25;
                const displayElement = moreInfoDivYTB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".YTBlikes").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivYTB = document.querySelector('.ytbC');
        const h2Element = document.querySelector('.YTBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialYTB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivYTB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 15;
                const displayElement = moreInfoDivYTB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".YTBcom").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivYTB = document.querySelector('.ytbC');
        const h2Element = document.querySelector('.YTBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialYTB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivYTB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 500;
                const displayElement = moreInfoDivYTB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector(".YTBshare").addEventListener("click", function (event) {
        const span = this; // 'this' refers to the clicked element
        let moreInfoDivYTB = document.querySelector('.ytbC');
        const h2Element = document.querySelector('.YTBh2');
        h2 = h2Element.innerText;
        spanText = span.innerText;

        document.querySelector('.insideSocialYTB').innerHTML = `
    <div class='info2'>
        <div class='insideInfo'>
            <div class="quantity-input">
                <input class='egal' type='number' value="" min="1">K
            </div>
            <p>أدخل عدد ${spanText} الذي ترغب به في ${h2} بالآلاف</p>
        </div>
        <div class='egal-display'></div>
    </div>`;

        moreInfoDivYTB.addEventListener('input', function (event) {
            if (event.target.classList.contains('egal')) {
                const egalInput = event.target;
                egalValue = egalInput.value;
                money = egalValue * 15;
                const displayElement = moreInfoDivYTB.querySelector('.egal-display');

                if (displayElement) {
                    displayElement.innerHTML = `
                <table class='egalTBL'>
                    <tr>
                        <td>بثمن ${money} درهم</td>
                        <td>من ${spanText}</td>
                        <td>${egalValue}K</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <input class='egalTBLInput' type='text' placeholder='قم بإدخال رابط الفيديو أو الصفحة هنا'>
                        </td>
                    </tr>
                </table><br>
                <button class='wtsp'>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">أتمم الطلب</span>
                </button>`;
                }
            }
        });
    });

    document.querySelector('.upYTB').addEventListener('click', function () {
        const moreInfoDivYTB = document.querySelector('.ytbC');
        const elementsToClear = ['.insideSocialFB', '.insideSocialINSTA', '.insideSocialTIK', '.insideSocialYTB'];

        // Loop through elements and clear their content
        elementsToClear.forEach(selector => {
            document.querySelector(selector).innerHTML = '';
        });
        moreInfoDivYTB.classList.remove('visible');

        moreInfoDivYTB.classList.add('hide');
    });




    //////////////////// WHATSAPP SEND /////////////////

    document.querySelector(".insideSocialINSTA").addEventListener("click", function (event) {
        const wtspButton = event.target.closest('.wtsp');
        if (wtspButton) {
            const egalTBLInput = document.querySelector('.instaC .egalTBLInput');
            const egalTBLValue = egalTBLInput.value.trim();

            if (egalTBLValue !== "") {
                const formattedNumber = '+905445518883';
                const encodedMessage = encodeURIComponent(`طلب: ${egalValue} ألف من ${spanText} ${h2} \n==>> ${egalTBLValue}`);
                const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

                // Open the WhatsApp link in the same tab
                window.open(url, '_blank');
            } else {
                alert("يجب أن تقوم بإدخال رابط الفيديو أو الصفحة الخاصة بك أولا");
            }
        }
    });




    document.querySelector(".insideSocialFB").addEventListener("click", function (event) {
        const wtspButton = event.target.closest('.wtsp');
        if (wtspButton) {
            const egalTBLInput = document.querySelector('.fbC .egalTBLInput');
            const egalTBLValue = egalTBLInput.value.trim();

            if (egalTBLValue !== "") {
                const formattedNumber = '+905445518883'; // Replace with the desired phone number   طلب: ${egalValue} ألف من ${spanText} ${h2} ب ${money}  درهم \n==>> ${egalTBLValue}    ب ${money}  درهم 
                const encodedMessage = encodeURIComponent(` طلب: ${egalValue} ألف من ${spanText} ${h2} \n==>> ${egalTBLValue}`);
                const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
                window.open(url, '_blank');
            } else {
                alert("يجب أن تقوم بإدخال رابط الفيديو أو الصفحة الخاصة بك أولا");
            }
        }
    });

    document.querySelector(".insideSocialTIK").addEventListener("click", function (event) {
        const wtspButton = event.target.closest('.wtsp');
        if (wtspButton) {
            const egalTBLInput = document.querySelector('.tikC .egalTBLInput');
            const egalTBLValue = egalTBLInput.value.trim();

            if (egalTBLValue !== "") {
                const formattedNumber = '+905445518883'; // Replace with the desired phone number
                const encodedMessage = encodeURIComponent(` طلب: ${egalValue} ألف من ${spanText} ${h2} \n==>> ${egalTBLValue}`);
                const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
                window.open(url, '_blank');
            } else {
                alert("يجب أن تقوم بإدخال رابط الفيديو أو الصفحة الخاصة بك أولا");
            }
        }
    });

    document.querySelector(".insideSocialYTB").addEventListener("click", function (event) {
        const wtspButton = event.target.closest('.wtsp');
        if (wtspButton) {
            const egalTBLInput = document.querySelector('.ytbC .egalTBLInput');
            const egalTBLValue = egalTBLInput.value.trim();

            if (egalTBLValue !== "") {
                const formattedNumber = '+905445518883'; // Replace with the desired phone number
                const encodedMessage = encodeURIComponent(` طلب: ${egalValue} ألف من ${spanText} ${h2} \n==>> ${egalTBLValue}`);
                const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
                window.open(url, '_blank');
            } else {
                alert("يجب أن تقوم بإدخال رابط الفيديو أو الصفحة الخاصة بك أولا");
            }
        }
    });

    document.querySelector('input').addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === "enter") {
            // Blur the active/focused element to close the keyboard
            document.activeElement.blur();
        }

    
    });

});