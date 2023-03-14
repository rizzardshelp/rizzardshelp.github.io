// <!-- javascript -->


$(document).ready(function() {
    var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['mm'] = new Array();

    // English content
    arrLang['en']['home'] = 'Home';
    arrLang['en']['about'] = 'About Us';
    arrLang['en']['FAQs'] = 'FAQs';
    arrLang['en']['qr'] = 'Scan QR code to install the app';
    arrLang['en']['obj'] = 'Our Objective';
    arrLang['en']['objtext'] = 'Rizzards aim to make an all-in-one app helping people who are struggling with mental health. We wish to be a part of ur self-improvement journey. Let us be your supporter!';
    arrLang['en']['ddown'] = '<b>click here to download directly</b>';

    // Myanmar content
    arrLang['mm']['home'] = 'မူရင်း';
    arrLang['mm']['about'] = 'အကြောင်းအရာ';
    arrLang['mm']['FAQs'] = 'မေးခွန်းများ';
    arrLang['mm']['qr'] = 'App ကိုသွင်းရန် QR code ရိုက်ပါ';
    arrLang['mm']['obj'] = 'Rizzards ၏ရည်မှန်းချက်';
    arrLang['mm']['objtext'] = 'Rizzards ကတော့ mental health နဲ့ပတ်သက်ပြီးခံစားနေရသောသူများကို ကူညီပေးရန်ဖွဲစည်းထားသော၊ တစ်စုတစ်စည်းထဲဖြစ်အောင်ဖန်တီးပေးထားသော all-in-one မိုလ်ဘိုင်း အပ်ပလီကေးရှင်း ဖြစ်ပါတယ်။ သင်တိုရဲ့ ကိုယ်ပိုင်တိုးတတ်သောလမ်းခရီးကို rizzards မှ တစ်စိတ်တစ်ဒေသ ကူညီမှူပေးပါရစေ….';
    arrLang['mm']['ddown'] = '<b> ဒေါင်းလုဒ် ပြုလုပ်ရန် ဤစာတန်းကို နှိပ်ပါ</b>';
    // Process translation
    $(function(){
    var clicked = true;
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        

        $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
        });

        
        if (clicked) {
            $("#mm").html("ENG"); 
            $("#mm").attr("id", "en");
            clicked = false;
            
        } else{
            $("#en").html("မြန်မာ");
            $("#en").attr("id", "mm");
            clicked = true;
        };
    });
    
    });

    // change button
    // var clicked = true;
    // $(function(){
    // $('.translate').click(function() {
    //         if (clicked) {
    //             $("#mm").html("ENG");
    //             $("#mm").attr("id", "en");
    //             clicked = false;
    //         } else {
    //             $("#en").html("မြန်မာ");
    //             $("#en").attr("id", "mm");
    //             clicked = true;
    //         };
    //     });
    // });
        



})   
// $(document).ready(function mmAnden(){

// var clicked = true;
// function tomm() {
//     $("#mm").html("ENG");
//     $("#mm").attr("id", "en");
// }

// function toen() {
//     $("#en").html("မြန်မာ");
//     $("#en").attr("id", "mm");
// }

// $('.translate').click(function() {
//     if (clicked) {
//         tomm();
//         clicked = false;
//     } else {
//         toen();
//         clicked = true;
//     }
// })
// })


// function tomm()
//     {
//         document.getElementById("mm").innerHTML = "ENG"
//         var e = document.getElementById("mm");
//         e.id = "en";
    
    
    
//     }


//     function toen()
//     {   
//         document.getElementById("en").innerHTML = "မြန်မာ"
//         var e = document.getElementById("en");
//         e.id = "mm";
    
    
    
//     }

//     var clicked = true

//     function mmAnden(){
//         if (clicked){
            
//             tomm()
//             clicked = false
            
            
//         }
//         else{
//             toen()
//             clicked = true
            
            
//         }
//     }



    

