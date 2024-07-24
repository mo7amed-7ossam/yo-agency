$(window).scroll(function () {

    let scrollTop = $(window).scrollTop();
    if (scrollTop > 40) {
        $("nav").addClass("nav-bg")
    } else {
        $("nav").removeClass("nav-bg")
    }
})

$(".res-nav-btn").click(function () {
    $("nav .links").slideToggle()
    $("nav .links").addClass("mobile")
})
$("nav .links").click(function () {
    setTimeout(function () {
        $(".mobile").slideToggle()
    }, 400)
})


// ########

// تحديد مساحة كل اسلايد بناء على عددها
let slides_num = document.querySelectorAll(".slider-container .slide").length;
$(".slider-container .slider").css({ "width": (slides_num * 100) + "%" });
let slide_width = 100 / slides_num
$(".slider-container .slider .slide").css({ "width": slide_width + "%" });


// buttons click

// next_btn

let before_full_next = (slides_num * slide_width) - (2 * slide_width);
let full_next = (slides_num * slide_width) - slide_width;

$(".slider-container .slider-next").click(function () {
    // نوقف التشغيل التقائى و نشغله بعد خمس ثوانى
    clearInterval(sliderInterval);
    setTimeout(resetInterval, 5000);

    // بنوقف الزراير
    $(".slider-container .slider-controls button").attr("disabled", "disabled");
    // بنشغلها تانى بعد الحركه
    setTimeout(function () {
        $(".slider-container .slider-controls button").removeAttr("disabled");
    }, 1300)
    // مكان السلايدر فين
    let slider_translate = parseFloat($(".slider-container .slider").css("translate"));
    // لو احنا فاخر اسلايد قبل الاسكرول ميخلص

    if (Math.floor(Math.abs(slider_translate)) < Math.floor(before_full_next)) {

        $(".slider-container .slider").css({ "translate": (slider_translate - slide_width) + "%", "transition": "1.3s" });

    }
    // لو احنا فى اخر اسلايد فعليا
    else if (Math.floor(Math.abs(slider_translate)) < Math.floor(full_next)) {
        // الحركه عادى
        $(".slider-container .slider").css({ "translate": (slider_translate - slide_width) + "%", "transition": "1.3s" });
        setTimeout(function () {
            $(".slider-container .slider").css({ "translate": "0%", "transition": "0s" });

            $(".slider-container .slider").toggleClass("toggle-direction")
        }, 1300)

    }

})

// prev_btn

let before_full_prev = slide_width;

$(".slider-container .slider-prev").click(function () {
    // نوقف التشغيل التقائى و نشغله بعد خمس ثوانى
    clearInterval(sliderInterval);
    setTimeout(resetInterval, 5000);
    // بنوقف الزراير
    $(".slider-container .slider-controls button").attr("disabled", "disabled");
    // بنشغلها تانى بعد الحركه
    setTimeout(function () {
        $(".slider-container .slider-controls button").removeAttr("disabled");
    }, 1300)
    // مكان السلايدر فين
    let slider_translate = parseFloat($(".slider-container .slider").css("translate"));

    // لو احنا فى اول اسلايد 
    if (Math.floor(Math.abs(slider_translate)) == 0) {
        $(".slider-container .slider").toggleClass("toggle-direction");
        $(".slider-container .slider").css({ "translate": -full_next + "%", "transition": "0s" });
        setTimeout(function () {
            let slider_translate = parseFloat($(".slider-container .slider").css("translate"));
            $(".slider-container .slider").css({ "translate": (slider_translate + slide_width) + "%", "transition": "1.3s" });
        }, 200)

    } else if (Math.floor(Math.abs(slider_translate)) >= before_full_prev) {
        $(".slider-container .slider").css({ "translate": (slider_translate + slide_width) + "%", "transition": "1.3s" });
    }
})

// running

let sliderInterval;


function resetInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(function () {

        // بنوقف الزراير
        $(".slider-container .slider-controls button").attr("disabled", "disabled");
        // بنشغلها تانى بعد الحركه
        setTimeout(function () {
            $(".slider-container .slider-controls button").removeAttr("disabled");
        }, 1300)
        // مكان السلايدر فين
        let slider_translate = parseFloat($(".slider-container .slider").css("translate"));
        // لو احنا فاخر اسلايد قبل الاسكرول ميخلص

        if (Math.floor(Math.abs(slider_translate)) < Math.floor(before_full_next)) {

            $(".slider-container .slider").css({ "translate": (slider_translate - slide_width) + "%", "transition": "1.3s" });

        }
        // لو احنا فى اخر اسلايد فعليا
        else if (Math.floor(Math.abs(slider_translate)) < Math.floor(full_next)) {
            // الحركه عادى
            $(".slider-container .slider").css({ "translate": (slider_translate - slide_width) + "%", "transition": "1.3s" });
            setTimeout(function () {
                $(".slider-container .slider").css({ "translate": "0%", "transition": "0s" });

                $(".slider-container .slider").toggleClass("toggle-direction")
            }, 1300)

        }


    }, 5000);
}

resetInterval(); // Start the interval initially

// iframe



function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_mjnqs2j";
    const templateID = "template_oftnks3";
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("phone").value = ""
            document.getElementById("email").value = ""
            document.getElementById("message").value = ""
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
}

$(".contact form button").click(function () {
    $(this).attr("disabled", "disabled");
    setTimeout(function () {
        $(".contact form button").removeAttr("disabled")
    }, 5000)
})