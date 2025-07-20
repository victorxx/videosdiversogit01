let indexe=0;
let limiteporvez=1;
let videos=[
"https://www.youtube.com/embed/DSmcB01rsvQ",
"https://www.youtube.com/embed/AKXRUQ2iRME",
"https://www.youtube.com/embed/m703-1Vrmbk",
"https://www.youtube.com/embed/-hHNdkREALA",
"https://www.youtube.com/embed/kaLtHBFOOW4",
"https://www.youtube.com/embed/ahYSJqyF_nk",
"https://www.youtube.com/embed/-hHNdkREALA",
"https://www.youtube.com/embed/NDnkWOYt6PM",
"https://www.youtube.com/embed/iopHSHF2bPw",
"https://www.youtube.com/embed/Xlj5IBv0T5M",
"https://www.youtube.com/embed/ahYSJqyF_nk",
"https://www.youtube.com/embed/-vvsua9Qt3E",
"https://www.youtube.com/embed/_11IG4w6dwI",
"https://www.youtube.com/embed/93NuDbggfGw",
"https://www.youtube.com/embed/QsP72ydJ9eY",
"https://www.youtube.com/embed/hdyj0PqCYUw",
"https://www.youtube.com/embed/H5OHcCCDyz4",
"https://www.youtube.com/embed/ujIWj722nLo",
"https://www.youtube.com/embed/HR74u3MESnE",
"https://www.youtube.com/embed/L44jYBGyFAM",
"https://www.youtube.com/embed/EK_hxsxWF4I",
"https://www.youtube.com/embed/37NQkCpKjVw",
"https://www.youtube.com/embed/qhFuQbhWgh0",
"https://www.youtube.com/embed/w-qXA6iUd7c",
"https://www.youtube.com/embed/SFjvXPi9JvE",
"https://www.youtube.com/embed/MVeRuwkig18",
"https://www.youtube.com/embed/i98jJWzUaYE",
"https://www.youtube.com/embed/DSmcB01rsvQ",
"https://www.youtube.com/embed/AKXRUQ2iRME",
"https://www.youtube.com/embed/-NTuZG-ddr4",
"https://www.youtube.com/embed/zION8HhU_Q8",
"https://www.youtube.com/embed/BEB46MdrCB4",
"https://www.youtube.com/embed/1yUKXgDdyZA",
"https://www.youtube.com/embed/BVktykS-NAE",
"https://www.youtube.com/embed/YikwYvFqDzM",
"https://www.youtube.com/embed/Osk3affPxoY",
"https://www.youtube.com/embed/WE3kpX5aThQ",
"https://www.youtube.com/embed/ws2qlJWi2Rw",
"https://www.youtube.com/embed/10LGBuu4gzI",
"https://www.youtube.com/embed/8S76id4UiI8",
"https://www.youtube.com/embed/ehZ6MDESJYk",
"https://www.youtube.com/embed/04iU_Gfb4so",
"https://www.youtube.com/embed/MJGf_1TpdJs",
"https://www.youtube.com/embed/MpWCF6WUj-g",
"https://www.youtube.com/embed/S5pXqtRGI34",
"https://www.youtube.com/embed/g4Qju2hCYXU",
"https://www.youtube.com/embed/GlY9MMsyr9w",
"https://www.youtube.com/embed/Cl0AUlOCe2g",
"https://www.youtube.com/embed/YJxni-ryz-w",
"https://www.youtube.com/embed/tQqVR0zGook",
"https://www.youtube.com/embed/FTnXyCIBo5U",
"https://www.youtube.com/embed/Co2NzyictFc",
"https://www.youtube.com/embed/0tb7Oj9MwxQ",
"https://www.youtube.com/embed/8MDudqmtaWI",
"https://www.youtube.com/embed/BxVg9wdQ0TQ",
"https://www.youtube.com/embed/zVIWJhiDUC8",
"https://www.youtube.com/embed/EeWoYAf6oqE",
"https://www.youtube.com/embed/FFsjQcMzPGE",
"https://www.youtube.com/embed/JqdHV6SNOp4",
"https://www.youtube.com/embed/NtJZC9nK7tA",
"https://www.youtube.com/embed/KIumzssb990",
"https://www.youtube.com/embed/NDnkWOYt6PM",
"https://www.youtube.com/embed/LiDWte8Qs8Y",
"https://www.youtube.com/embed/dl--yIK1sqc",
"https://www.youtube.com/embed/RRWhYdTA2m0",
"https://www.youtube.com/embed/B3YXNxkpdvU",
"https://www.youtube.com/embed/4kQhx3YALBc",
"https://www.youtube.com/embed/P3NraaOKn8g",
"https://www.youtube.com/embed/NvvTNy2upFI",
"https://www.youtube.com/embed/IuWki0ye0q0",
"https://www.youtube.com/embed/AVryZ9B1z9k",
"https://www.youtube.com/embed/UE3XVRG-2Gs",
"https://www.youtube.com/embed/g38CsuI8_m8",
"https://www.youtube.com/embed/DgvqlElYNas",
"https://www.youtube.com/embed/nViDrPyNkpY",
"https://www.youtube.com/embed/-pVFOAk_NKY",
"https://www.youtube.com/embed/nZOG4jH5TLQ",
"https://www.youtube.com/embed/zDgtLHuSyWg",
"https://www.youtube.com/embed/ifjFziPD1Yw",
"https://www.youtube.com/embed/7ZQPZqMmwWI",
"https://www.youtube.com/embed/_EsZI-Vfy6E",
"https://www.youtube.com/embed/uA-5wbtQ8nQ",
"https://www.youtube.com/embed/KbDDVQd2HXo",
"https://www.youtube.com/embed/STzcR9r0o54",
"https://www.youtube.com/embed/SgdpdT4hjkM",
"https://www.youtube.com/embed/m703-1Vrmbk",
"https://www.youtube.com/embed/NIz3dodG30c",
"https://www.youtube.com/embed/Zgud2CwVb6c",
"https://www.youtube.com/embed/8qngxaq5QF8",
"https://www.youtube.com/embed/y3l0oneyA3g",
"https://www.youtube.com/embed/pftLKfoYnIw",
"https://www.youtube.com/embed/Jtnjdh92DhY",
"https://www.youtube.com/embed/KukCPbC6cnA",
"https://www.youtube.com/embed/6ZIv6TUYVH4",
"https://www.youtube.com/embed/-hTezjiRJPU",
"https://www.youtube.com/embed/sJfFwCY8R4A",
"https://www.youtube.com/embed/MIC0OtClhE0",
"https://www.youtube.com/embed/tc6FfCfVlcs",
"https://www.youtube.com/embed/KtOLJ0h8nSQ",
"https://www.youtube.com/embed/eUcLHSt2CeM",
"https://www.youtube.com/embed/o59KiPgctcA",
"https://www.youtube.com/embed/ZTthBbfem6A",
"https://www.youtube.com/embed/JI6YmboN9j0",
"https://www.youtube.com/embed/ay1QAn1rYjw",
"https://www.youtube.com/embed/m2hklRinDXI",
"https://www.youtube.com/embed/HMVZPt3T73I",
"https://www.youtube.com/embed/5XLswJSLNDQ",
"https://www.youtube.com/embed/i34CJIwHrjA",
"https://www.youtube.com/embed/eCMdloprV5k",
"https://www.youtube.com/embed/djgiMiV4F9Q",
"https://www.youtube.com/embed/vmlnOKEcCtc",
"https://www.youtube.com/embed/DRaBxwAfcDs",
"https://www.youtube.com/embed/r7jcSv-IE3c",
"https://www.youtube.com/embed/LPwUzYevCfA",
"https://www.youtube.com/embed/O5HxpoGsYrQ"

];
                let botao=document.getElementById('btn');
                let contador=0;
                let resultado=document.getElementById('video');
                document.getElementById('btn').onclick=function(){
                    let final=indexe+limiteporvez;
                    for(;indexe<final && indexe<videos.length;indexe++){
                        let iframe=document.createElement('iframe');
                        iframe.width=300;
                        iframe.height=300;
                        iframe.src=videos[indexe];
                        contador++;
                        if(contador==2) {
                            let div=document.createElement('div');
                            div.innerHTML=`
                        <a href="https://victorxx.github.io/hostinger05/" style="display: inline-block; background-color: red; color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
                                CONFERIR ESSA OPORTUNIDADE
                                </a>
                            `;
                            resultado.appendChild(div);
                            contador=0;

                        }  
                        resultado.appendChild(iframe);

                    }
                    if(indexe>=videos.length){
                        botao.disabled=true;
                        botao.textContent='já chegamos no limite';
                    }
    
}
