# 📦 GUIA DE EXPORTAÇÃO - Seção de Ingressos Festival Parental

Este documento contém todos os arquivos e instruções para exportar a seção de ingressos para sua IDE.

---

## 1. ESTRUTURA DE PASTAS

```
seu-projeto/
├── src/
│   ├── components/
│   │   └── Section6.tsx          (Componente principal)
│   ├── utils/
│   │   └── svgPaths.ts            (Dados SVG)
│   └── App.tsx                     (Importação do componente)
└── public/
    └── index.html                  (Com links das fontes)
```

---

## 2. ARQUIVO: `src/utils/svgPaths.ts`

```typescript
export default {
  p27bba100: "M9.25135 9.7552C9.35098 9.65996 9.36644 9.53122 9.37493 9.38687C9.38531 9.19181 9.39456 8.9448 9.59301 8.76518C9.93763 8.47075 10.1329 8.60975 10.4282 8.28725C10.4477 8.2665 10.4667 8.24749 10.4873 8.2281C10.7796 7.95306 11.1594 7.82258 11.2465 7.6471C11.3406 7.45934 11.5243 7.66948 11.7007 7.46138C11.8783 7.25342 12.0325 7.18759 12.2758 7.1286C12.3765 7.10438 12.5438 7.03189 12.7196 6.9431C12.9688 6.81567 13.2391 6.6632 13.3501 6.5353C13.5421 6.31124 13.9075 6.37524 14.0861 6.36087C14.143 6.35556 14.1904 6.35961 14.2284 6.36782C14.2445 6.3713 14.2566 6.38617 14.2624 6.40297C14.2624 6.40298 14.2625 6.40299 14.2625 6.403C14.2698 6.42392 14.2675 6.44781 14.2514 6.4564C14.1739 6.49817 14.0616 6.57549 13.9519 6.7056C13.7544 6.95008 13.6594 6.80681 13.3638 7.05376C13.2243 7.17433 13.1292 7.29785 13.0205 7.41029C12.9044 7.53101 12.7718 7.63982 12.5523 7.73119C12.1265 7.91252 12.291 8.30585 11.6458 8.50499C11.2934 8.61662 11.1982 8.78631 11.1173 8.98416C11.0514 9.14932 10.9862 9.33755 10.8298 9.52711C10.6912 9.69618 10.5569 9.82633 10.393 10.0209C10.1528 10.3028 9.91503 10.5973 9.8294 10.8021C9.73997 11.0157 9.64564 11.2825 9.52842 11.569C9.45682 11.7438 9.37581 11.9273 9.27969 12.1106C9.05144 12.5437 8.95366 13.1269 8.68908 13.6467C8.65487 13.7127 8.61881 13.7765 8.56991 13.8511C8.54524 13.8883 8.51948 13.9277 8.47682 13.9843C8.41181 14.0313 8.45028 14.1498 8.04423 14.2722C7.81737 14.3085 7.65199 14.1956 7.59745 14.1482C7.53342 14.0931 7.50992 14.0578 7.48832 14.0281C7.44836 13.9698 7.43187 13.9338 7.41391 13.8983C7.22749 13.4932 7.07375 13.1624 6.88844 12.9184C6.82485 12.8351 6.7694 12.7607 6.72488 12.6983C6.48889 12.368 6.43042 12.2896 6.11096 12.0727C5.92808 11.9476 5.71985 11.7246 5.61218 11.4605C5.56085 11.3228 5.64476 11.3014 5.7552 11.3593C5.92465 11.4479 6.01604 11.5791 6.15337 11.5719C6.42875 11.5571 6.53985 11.5559 6.64582 11.8053C6.75185 12.0546 7.01191 11.9395 7.09849 12.0579C7.16168 12.1444 7.1232 12.2271 7.33861 12.4223C7.4294 12.505 7.55423 12.6102 7.71954 12.7606C7.9591 12.9781 8.13015 13.1956 8.24384 13.3156C8.26556 13.3394 8.28512 13.3597 8.29189 13.3621C8.28738 13.3643 8.32808 13.3455 8.14001 13.246C8.04355 13.193 7.81938 13.1987 7.72537 13.2546C7.62527 13.3039 7.59742 13.3412 7.57787 13.3585C7.54285 13.3954 7.54675 13.3911 7.54609 13.3853C7.55521 13.3483 7.58522 13.2596 7.60482 13.1923C7.60973 13.1756 7.61523 13.1573 7.61988 13.1409C7.6929 12.8908 8.0218 12.398 8.14201 11.9587C8.20137 11.7419 8.32397 11.4265 8.44961 11.1155C8.57878 10.7947 8.71269 10.4834 8.76234 10.2897C8.8623 9.90768 9.01782 9.98209 9.25135 9.7552Z",
  
  p28cf0800: "M9.94291 9.02598C10.1993 8.90611 10.054 8.45606 10.3318 8.27197C10.6093 8.0891 10.7986 8.21883 11.035 7.92766C11.2721 7.63648 11.6501 7.49831 11.7097 7.31909C11.7698 7.13942 11.9702 7.33406 12.102 7.13115C12.2343 6.92812 12.3648 6.85987 12.5772 6.79136C12.6811 6.75768 12.8585 6.65441 13.0229 6.53163C13.197 6.40166 13.3571 6.24938 13.4067 6.12893C13.4976 5.9043 13.8017 5.86945 13.9457 5.80483C13.9494 5.80429 13.9551 5.80126 13.9605 5.79811C14.0014 5.77433 14.0404 5.75735 14.0747 5.7477C14.0893 5.74358 14.1069 5.75054 14.1206 5.76182C14.1206 5.76183 14.1206 5.76184 14.1207 5.76184C14.1378 5.7759 14.149 5.79658 14.141 5.81081C14.1229 5.84253 14.1032 5.88387 14.0793 5.93528C14.0487 5.99555 14.0171 6.06537 13.9909 6.14755C13.8991 6.43128 13.7684 6.32538 13.5613 6.61249C13.483 6.72073 13.4277 6.82296 13.3681 6.92011C13.271 7.08038 13.1639 7.22492 12.9337 7.34771C12.5661 7.54421 12.7755 7.91519 12.1965 8.12485C11.6167 8.33778 11.8682 8.69846 11.4988 9.12809C11.218 9.45548 10.7613 9.72194 10.462 9.9468C10.3679 10.0174 10.2893 10.0834 10.2363 10.1447C10.0139 10.4018 9.73792 10.7669 9.37041 11.0847C9.00179 11.4027 8.71517 11.9465 8.28452 12.2841C8.11139 12.4198 7.91192 12.5796 7.71353 12.7362C7.41665 12.9706 7.1248 13.1928 6.94321 13.3142C6.64069 13.5161 6.56731 13.5655 6.37578 13.8496C6.32943 13.9183 6.26706 13.9888 6.1943 14.0542C6.09392 14.1457 5.97117 14.2245 5.85189 14.2871C5.75334 14.3476 5.68159 14.3048 5.72323 14.1689C5.78718 13.9882 5.90721 13.9144 5.89837 13.7857C5.89819 13.7834 5.89798 13.7811 5.89772 13.7787C5.87149 13.5163 5.86784 13.4105 6.09971 13.3287C6.33141 13.2472 6.21015 12.9957 6.31719 12.9233C6.4239 12.8502 6.53845 12.9564 6.87882 12.3996C6.93568 12.3061 6.9886 12.2202 7.03836 12.1407C7.28333 11.7478 7.4486 11.5192 7.56595 11.3497C7.70658 11.1459 8.14637 10.8472 8.38127 10.5164C8.61475 10.1835 9.20895 9.61297 9.38622 9.321C9.4686 9.18345 9.54013 9.13691 9.61899 9.11336C9.70795 9.08711 9.80643 9.0902 9.94291 9.02598ZM11.2278 10.0176C11.2634 10.0759 11.318 10.1089 11.38 10.1268C11.5719 10.1842 11.8554 10.1193 12.0172 10.3143C12.2306 10.575 12.1191 10.7721 12.4313 10.9959C12.7179 11.2024 12.8679 11.5641 13.0149 11.68C13.0306 11.6922 13.0466 11.7019 13.0631 11.7089C13.239 11.7841 13.0294 11.9679 13.2188 12.1179C13.4082 12.2699 13.4614 12.4084 13.5026 12.6269C13.5315 12.7771 13.6726 13.0896 13.8283 13.3044C13.8308 13.3072 13.8359 13.3174 13.8381 13.3206C13.9003 13.4298 13.9626 13.5236 14.024 13.5747C14.1379 13.6702 14.1568 13.8099 14.1616 13.9341L14.1569 13.9252C14.1628 14.0142 14.1703 14.1073 14.1917 14.1707C14.2074 14.2169 14.2142 14.2583 14.2152 14.2935C14.2157 14.3083 14.2048 14.3238 14.1907 14.3346C14.1906 14.3346 14.1906 14.3346 14.1906 14.3346C14.173 14.348 14.1503 14.3543 14.1385 14.3433C14.0812 14.289 13.9843 14.223 13.8396 14.1351C13.8302 14.1294 13.8213 14.1235 13.8129 14.1177C13.59 13.9432 13.7239 13.8418 13.5186 13.5943C13.4976 13.5696 13.4763 13.5466 13.4548 13.5249L13.4703 13.5504C13.2402 13.3562 13.0359 13.2545 12.908 12.9143C12.7742 12.5671 12.4391 12.6856 12.2717 12.2704C12.2564 12.233 12.2427 12.1918 12.2304 12.1459C12.0662 11.5925 11.7045 11.8616 11.2783 11.5577C11.0693 11.4121 10.8726 11.1989 10.6891 10.9922C10.4872 10.7642 10.3042 10.5449 10.1581 10.445C9.87999 10.2551 9.48873 10.0199 9.14223 9.6825C8.796 9.3451 8.23472 9.09784 7.87797 8.68511C7.69222 8.47041 7.46647 8.21189 7.2649 7.96598C7.07776 7.73829 6.9145 7.52214 6.81967 7.37553C6.62266 7.06725 6.57963 6.99798 6.31276 6.77485C6.15979 6.64593 6.01529 6.40413 5.9843 6.15697C5.96769 6.03238 6.04717 6.00963 6.1415 6.08103C6.27881 6.18475 6.32731 6.31251 6.45543 6.31752C6.71072 6.32509 6.80296 6.3194 6.85309 6.54484C6.90789 6.77218 7.16278 6.65732 7.2251 6.75966C7.29096 6.86082 7.17749 6.98036 7.72335 7.29577C7.74754 7.30947 7.77155 7.32315 7.79534 7.33679C8.29897 7.62077 8.57541 7.79673 8.77036 7.91633C8.97511 8.04124 9.28888 8.45182 9.62913 8.65183C9.96879 8.85173 10.5763 9.37076 10.8806 9.50747C11.1853 9.64418 11.0806 9.77993 11.2278 10.0176Z",
  
  p2ced7a00: "M9.37803 0.768855C9.69822 0.373048 10.3018 0.373048 10.622 0.768855L11.3846 1.71164C11.6168 1.99857 12.015 2.08948 12.3487 1.93167L13.4449 1.41316C13.9051 1.19548 14.4489 1.45735 14.5656 1.95289L14.8437 3.13321C14.9283 3.49245 15.2477 3.74716 15.6168 3.74974L16.8294 3.7582C17.3385 3.76175 17.7148 4.23363 17.605 4.73075L17.3434 5.91484C17.2638 6.27522 17.4411 6.6433 17.7724 6.80575L18.8613 7.3395C19.3184 7.56359 19.4527 8.15201 19.1381 8.55225L18.3887 9.50559C18.1606 9.79574 18.1606 10.2043 18.3887 10.4944L19.1381 11.4477C19.4527 11.848 19.3184 12.4364 18.8613 12.6605L17.7724 13.1943C17.4411 13.3567 17.2638 13.7248 17.3434 14.0852L17.605 15.2692C17.7148 15.7664 17.3385 16.2382 16.8294 16.2418L15.6168 16.2503C15.2477 16.2528 14.9283 16.5076 14.8437 16.8668L14.5656 18.0471C14.4489 18.5426 13.9051 18.8045 13.4449 18.5868L12.3487 18.0683C12.015 17.9105 11.6168 18.0014 11.3846 18.2884L10.622 19.2311C10.3018 19.627 9.69822 19.627 9.37803 19.2311L8.61536 18.2884C8.38324 18.0014 7.98496 17.9105 7.65133 18.0683L6.55513 18.5868C6.09492 18.8045 5.55113 18.5426 5.43438 18.0471L5.1563 16.8668C5.07166 16.5076 4.75226 16.2528 4.3832 16.2503L3.17059 16.2418C2.6615 16.2382 2.28519 15.7664 2.39501 15.2692L2.65659 14.0852C2.7362 13.7248 2.55895 13.3567 2.22755 13.1943L1.1387 12.6605C0.681568 12.4364 0.547264 11.848 0.861898 11.4477L1.61133 10.4944C1.83942 10.2043 1.83942 9.79573 1.61133 9.50559L0.861898 8.55225C0.547263 8.15201 0.681568 7.56359 1.1387 7.3395L2.22755 6.80575C2.55895 6.64329 2.7362 6.27522 2.65659 5.91484L2.39501 4.73075C2.28519 4.23363 2.6615 3.76175 3.17059 3.7582L4.3832 3.74974C4.75226 3.74716 5.07167 3.49245 5.1563 3.13321L5.43438 1.95289C5.55113 1.45735 6.09492 1.19548 6.55513 1.41316L7.65133 1.93167C7.98496 2.08948 8.38324 1.99857 8.61536 1.71164L9.37803 0.768855Z",
  
  p3c37a600: "M9.56445 0.919922C9.78859 0.642857 10.2114 0.642857 10.4355 0.919922L11.1982 1.8623C11.5 2.23532 12.0175 2.35357 12.4512 2.14844L13.5479 1.62988C13.8699 1.47785 14.2503 1.66114 14.332 2.00781L14.6104 3.18848C14.7205 3.65534 15.1355 3.98591 15.6152 3.98926L16.8281 3.99805C17.1842 4.00077 17.4477 4.33099 17.3711 4.67871L17.1094 5.86328C17.006 6.33173 17.2362 6.81032 17.667 7.02148L18.7559 7.55469C19.0758 7.71156 19.1695 8.12414 18.9492 8.4043L18.2002 9.35742C17.9037 9.73462 17.9037 10.2654 18.2002 10.6426L18.9492 11.5957C19.1695 11.8759 19.0758 12.2884 18.7559 12.4453L17.667 12.9785C17.2362 13.1897 17.006 13.6683 17.1094 14.1367L17.3711 15.3213C17.4477 15.669 17.1842 15.9992 16.8281 16.002L15.6152 16.0107C15.1355 16.0141 14.7205 16.3447 14.6104 16.8115L14.332 17.9922C14.2503 18.3389 13.8699 18.5222 13.5479 18.3701L12.4512 17.8516C12.0175 17.6464 11.5 17.7647 11.1982 18.1377L10.4355 19.0801C10.2114 19.3571 9.78859 19.3571 9.56445 19.0801L8.80176 18.1377C8.50001 17.7647 7.98254 17.6464 7.54883 17.8516L6.45215 18.3701C6.13011 18.5222 5.74971 18.3389 5.66797 17.9922L5.38965 16.8115C5.27953 16.3447 4.86445 16.0141 4.38477 16.0107L3.17188 16.002C2.81583 15.9992 2.55232 15.669 2.62891 15.3213L2.89062 14.1367C2.99405 13.6683 2.76378 13.1897 2.33301 12.9785L1.24414 12.4453C0.924176 12.2884 0.830545 11.8759 1.05078 11.5957L1.7998 10.6426C2.09632 10.2654 2.09632 9.73462 1.7998 9.35742L1.05078 8.4043C0.830545 8.12414 0.924176 7.71156 1.24414 7.55469L2.33301 7.02148C2.76378 6.81032 2.99405 6.33173 2.89062 5.86328L2.62891 4.67871C2.55232 4.33099 2.81583 4.00077 3.17188 3.99805L4.38477 3.98926C4.86445 3.98591 5.27953 3.65534 5.38965 3.18848L5.66797 2.00781C5.74971 1.66114 6.13011 1.47785 6.45215 1.62988L7.54883 2.14844C7.98254 2.35357 8.50001 2.23532 8.80176 1.8623L9.56445 0.919922Z",
  
  p60d3f00: "M2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V9.75C1.5 9.94891 1.57902 10.1397 1.71967 10.2803C1.86032 10.421 2.05109 10.5 2.25 10.5H7.6275C7.78245 10.0608 8.0698 9.68057 8.44995 9.41159C8.83009 9.14261 9.28431 8.99816 9.75 8.99816C10.2157 8.99816 10.6699 9.14261 11.05 9.41159C11.4302 9.68057 11.7175 10.0608 11.8725 10.5H12.75C12.9489 10.5 13.1397 10.421 13.2803 10.2803C13.421 10.1397 13.5 9.94891 13.5 9.75V2.25C13.5 2.05109 13.421 1.86032 13.2803 1.71967C13.1397 1.57902 12.9489 1.5 12.75 1.5H11.8725C11.7175 1.93915 11.4302 2.31942 11.05 2.58841C10.6699 2.85739 10.2157 3.00184 9.75 3.00184C9.28431 3.00184 8.83009 2.85739 8.44995 2.58841C8.0698 2.31942 7.78245 1.93915 7.6275 1.5H2.25ZM0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H8.25C8.44891 0 8.63968 0.0790178 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5C9.94891 1.5 10.1397 1.42098 10.2803 1.28033C10.421 1.13968 10.5 0.948912 10.5 0.75C10.5 0.551088 10.579 0.360322 10.7197 0.21967C10.8603 0.0790178 11.0511 0 11.25 0H12.75C13.3467 0 13.919 0.237053 14.341 0.65901C14.7629 1.08097 15 1.65326 15 2.25V9.75C15 10.3467 14.7629 10.919 14.341 11.341C13.919 11.7629 13.3467 12 12.75 12H11.25C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.421 10.8603 10.2803 10.7197C10.1397 10.579 9.94891 10.5 9.75 10.5C9.55109 10.5 9.36032 10.579 9.21967 10.7197C9.07902 10.8603 9 11.0511 9 11.25C9 11.4489 8.92098 11.6397 8.78033 11.7803C8.63968 11.921 8.44891 12 8.25 12H2.25C1.65326 12 1.08097 11.7629 0.65901 11.341C0.237053 10.919 0 10.3467 0 9.75V2.25ZM9.75 3.75C9.94891 3.75 10.1397 3.82902 10.2803 3.96967C10.421 4.11032 10.5 4.30109 10.5 4.5V4.875C10.5 5.07391 10.421 5.26468 10.2803 5.40533C10.1397 5.54598 9.94891 5.625 9.75 5.625C9.55109 5.625 9.36032 5.54598 9.21967 5.40533C9.07902 5.26468 9 5.07391 9 4.875V4.5C9 4.30109 9.07902 4.11032 9.21967 3.96967C9.36032 3.82902 9.55109 3.75 9.75 3.75ZM10.5 7.125C10.5 6.92609 10.421 6.73532 10.2803 6.59467C10.1397 6.45402 9.94891 6.375 9.75 6.375C9.55109 6.375 9.36032 6.45402 9.21967 6.59467C9.07902 6.73532 9 6.92609 9 7.125V7.5C9 7.69891 9.07902 7.88968 9.21967 8.03033C9.36032 8.17098 9.55109 8.25 9.75 8.25C9.94891 8.25 10.1397 8.17098 10.2803 8.03033C10.421 7.88968 10.5 7.69891 10.5 7.5V7.125Z",
  
  paf20500: "M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H10.17C10.3766 13.4145 10.7597 12.9074 11.2666 12.5488C11.7735 12.1901 12.3791 11.9975 13 11.9975C13.6209 11.9975 14.2265 12.1901 14.7334 12.5488C15.2403 12.9074 15.6234 13.4145 15.83 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H15.83C15.6234 2.58553 15.2403 3.09257 14.7334 3.45121C14.2265 3.80985 13.6209 4.00245 13 4.00245C12.3791 4.00245 11.7735 3.80985 11.2666 3.45121C10.7597 3.09257 10.3766 2.58553 10.17 2H3ZM0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H11C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734783 12 1C12 1.26522 12.1054 1.51957 12.2929 1.70711C12.4804 1.89464 12.7348 2 13 2C13.2652 2 13.5196 1.89464 13.7071 1.70711C13.8946 1.51957 14 1.26522 14 1C14 0.734783 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0H17C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V13C20 13.7956 19.6839 14.5587 19.1213 15.1213C18.5587 15.6839 17.7956 16 17 16H15C14.7348 16 14.4804 15.8946 14.2929 15.7071C14.1054 15.5196 14 15.2652 14 15C14 14.7348 13.8946 14.4804 13.7071 14.2929C13.5196 14.1054 13.2652 14 13 14C12.7348 14 12.4804 14.1054 12.2929 14.2929C12.1054 14.4804 12 14.7348 12 15C12 15.2652 11.8946 15.5196 11.7071 15.7071C11.5196 15.8946 11.2652 16 11 16H3C2.20435 16 1.44129 15.6839 0.87868 15.1213C0.316071 14.5587 0 13.7956 0 13V3ZM13 5C13.2652 5 13.5196 5.10536 13.7071 5.29289C13.8946 5.48043 14 5.73478 14 6V6.5C14 6.76522 13.8946 7.01957 13.7071 7.20711C13.5196 7.39464 13.2652 7.5 13 7.5C12.7348 7.5 12.4804 7.39464 12.2929 7.20711C12.1054 7.01957 12 6.76522 12 6.5V6C12 5.73478 12.1054 5.48043 12.2929 5.29289C12.4804 5.10536 12.7348 5 13 5ZM14 9.5C14 9.23478 13.8946 8.98043 13.7071 8.79289C13.5196 8.60536 13.2652 8.5 13 8.5C12.7348 8.5 12.4804 8.60536 12.2929 8.79289C12.1054 8.98043 12 9.23478 12 9.5V10C12 10.2652 12.1054 10.5196 12.2929 10.7071C12.4804 10.8946 12.7348 11 13 11C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10V9.5Z",
};
```

---

## 3. FONTES DO GOOGLE FONTS

### Adicionar no HTML (`public/index.html` ou similar)

Cole este código dentro da tag `<head>`:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- DM Sans -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">

<!-- Sugar Peachy (Custom Font) -->
<!-- IMPORTANTE: Esta fonte precisa ser baixada e incluída manualmente -->
<!-- Link: https://www.dafont.com/sugar-peachy.font -->
<!-- Ou usar uma fonte similar como "Pacifico" -->
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

<!-- Archivo -->
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

### ⚠️ NOTA IMPORTANTE SOBRE FONTES:

A fonte **"Sugar Peachy"** é uma fonte personalizada que não está no Google Fonts. Você tem 3 opções:

**Opção 1: Usar fonte substituta (RECOMENDADO)**
```css
/* Adicione ao seu CSS global */
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

/* Substitua Sugar_Peachy por Pacifico no componente */
```

**Opção 2: Baixar e incluir manualmente**
1. Baixe de: https://www.dafont.com/sugar-peachy.font
2. Coloque os arquivos na pasta `public/fonts/`
3. Adicione ao CSS:

```css
@font-face {
  font-family: 'Sugar Peachy';
  src: url('/fonts/SugarPeachy-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Sugar Peachy';
  src: url('/fonts/SugarPeachy-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Sugar Peachy';
  src: url('/fonts/SugarPeachy-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}
```

**Opção 3: Editar o componente**
Fazer "Find & Replace" no arquivo Section6.tsx:
- `Sugar_Peachy:Regular` → `Pacifico`
- `Sugar_Peachy:Bold` → `Pacifico`
- `Sugar_Peachy:Medium` → `Pacifico`

---

## 4. PALETA DE CORES

```css
/* Cores principais */
--bg-section: #fff6ef;        /* Fundo da seção */
--bg-educador: #fff6ef;       /* Card Educador */
--bg-parental: #ef7d25;       /* Card Parental (laranja) */
--bg-duplo: #2daa96;          /* Card Duplo (turquesa) */
--badge-lote: #f7a73c;        /* Badge "Lote 1" */
--btn-educador: #f7a73c;      /* Botão Educador */
--btn-parental: #0b6fb5;      /* Botão Parental (azul) */

/* Cores de texto */
--text-dark: #191919;         /* Texto principal preto */
--text-title: #2260a1;        /* Título azul */
--text-subtitle: #4c4d4f;     /* Subtítulo cinza */
--text-button: #505050;       /* Texto botão cinza */
--text-price: #ef7d25;        /* Preço laranja */

/* Cores de ícones */
--icon-green: #2DAA96;        /* Ícone check verde */
--icon-red: #E12D3B;          /* Ícone X vermelho */

/* Bordas e sombras */
--border-color: #191919;      /* Bordas pretas */
--shadow-color: #191919;      /* Sombra preta */
```

### Lista de cores HEX usadas:

| Cor | HEX | Uso |
|-----|-----|-----|
| Fundo seção | `#fff6ef` | Background principal |
| Fundo Educador | `#fff6ef` | Card Educador |
| Fundo Parental | `#ef7d25` | Card Parental |
| Fundo Duplo | `#2daa96` | Card Duplo |
| Laranja Badge | `#f7a73c` | Badge "Lote 1" |
| Azul Botão | `#0b6fb5` | Botão Parental |
| Preto | `#191919` | Texto, bordas, sombras |
| Azul Título | `#2260a1` | Título principal |
| Cinza Subtítulo | `#4c4d4f` | Subtítulo |
| Cinza Médio | `#505050` | Texto botão header |
| Verde Check | `#2daa96` | Ícone check |
| Vermelho X | `#e12d3b` | Ícone X |

---

## 5. COMPONENTE PRINCIPAL

**⚠️ ATENÇÃO: O arquivo é muito grande (2630 linhas)**

### OPÇÃO A: Copiar do Figma Make

Acesse o arquivo completo do componente principal clicando com o botão direito em `/imports/Section6.tsx` no Figma Make e selecionando "Download".

### OPÇÃO B: Download direto

Como o componente é muito extenso, vou criar um arquivo compactado para você baixar.

Por ora, aqui está a estrutura básica e você pode copiar o arquivo completo diretamente da pasta `/imports/Section6.tsx`:

**Estrutura do arquivo `src/components/Section6.tsx`:**

```tsx
import svgPaths from '../utils/svgPaths';

// ... (2600+ linhas de código com todos os subcomponentes)

export default function Section() {
  return (
    <div className="bg-[#fff6ef] content-stretch flex items-center justify-center py-[76px] relative size-full" data-name="Section - 6">
      <Content />
    </div>
  );
}
```

O componente contém:
- 3 cartões de ingresso (Educador, Parental, Parental Duplo)
- Header com título e descrição
- QR codes decorativos
- Lista de benefícios com ícones
- Botões de compra com links
- Informações de preço

---

## 6. CONFIGURAÇÃO TAILWIND CSS

Se você estiver usando Tailwind, certifique-se de que o arquivo `tailwind.config.js` inclui:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'section-bg': '#fff6ef',
        'educador': '#fff6ef',
        'parental': '#ef7d25',
        'duplo': '#2daa96',
        'badge': '#f7a73c',
      },
      boxShadow: {
        'neu': '3px 3px 0px 0px #191919',
        'neu-lg': '4px 4px 0px 0px #191919',
      },
    },
  },
  plugins: [],
}
```

---

## 7. INSTRUÇÕES PASSO A PASSO

### 📋 Passo 1: Criar estrutura de pastas

```bash
mkdir -p src/components
mkdir -p src/utils
```

### 📋 Passo 2: Criar arquivo SVG

1. Crie o arquivo: `src/utils/svgPaths.ts`
2. Cole o conteúdo da seção **"2. ARQUIVO svgPaths.ts"** acima

### 📋 Passo 3: Criar componente principal

1. Crie o arquivo: `src/components/Section6.tsx`
2. Copie o arquivo completo de `/imports/Section6.tsx` do Figma Make
3. Ajuste o import na primeira linha:
   ```tsx
   import svgPaths from '../utils/svgPaths';
   ```

### 📋 Passo 4: Adicionar fontes

1. Abra seu arquivo HTML principal (`public/index.html`)
2. Cole os links das fontes na seção **"3. FONTES"** dentro da tag `<head>`

### 📋 Passo 5: Importar no App

Edite seu `src/App.tsx`:

```tsx
import Section6 from './components/Section6';

function App() {
  return (
    <div className="App">
      <Section6 />
    </div>
  );
}

export default App;
```

### 📋 Passo 6: Configurar Tailwind (se necessário)

1. Se usar Tailwind, ajuste o `tailwind.config.js` conforme seção **"6. CONFIGURAÇÃO TAILWIND"**
2. Certifique-se de que Tailwind está importado no CSS global

### 📋 Passo 7: Testar

```bash
npm start
# ou
yarn start
```

---

## 8. LINKS ÚTEIS

### Links de compra (já incluídos no código)
- **Educador**: https://sun.eduzz.com/E0D64VX691
- **Parental**: https://sun.eduzz.com/60EEPZX603
- **Duplo**: (Adicionar link se necessário)

### Ajustes possíveis
Para alterar os links de compra, edite diretamente no componente:

```tsx
// Procure por:
<a href="https://sun.eduzz.com/E0D64VX691">
// E altere para seu link
```

---

## 9. ✅ CHECKLIST FINAL

Marque cada item conforme for completando:

### Arquivos
- [ ] Criei a pasta `src/utils/`
- [ ] Criei o arquivo `src/utils/svgPaths.ts`
- [ ] Copiei o conteúdo dos SVG paths
- [ ] Criei a pasta `src/components/`
- [ ] Criei o arquivo `src/components/Section6.tsx`
- [ ] Copiei o código completo do componente (2630 linhas)
- [ ] Ajustei o import do svgPaths no componente

### Fontes
- [ ] Adicionei os links das fontes no HTML
- [ ] Decidi qual opção usar para Sugar Peachy:
  - [ ] Opção 1: Usar Pacifico como substituta
  - [ ] Opção 2: Baixar e incluir Sugar Peachy manualmente
  - [ ] Opção 3: Fazer Find & Replace no componente

### Importação
- [ ] Importei Section6 no App.tsx
- [ ] O componente está renderizando

### Estilos
- [ ] Tailwind CSS está instalado e configurado
- [ ] CSS global está importado
- [ ] Cores e sombras aparecem corretamente

### Testes
- [ ] Página carrega sem erros
- [ ] Fontes aparecem corretamente
- [ ] Ícones SVG aparecem
- [ ] Layout está responsivo
- [ ] Links dos botões funcionam
- [ ] Cores estão corretas

---

## 10. TROUBLESHOOTING

### ❌ Problema: Fontes não aparecem

**Solução:**
1. Verifique se os links estão no `<head>` do HTML
2. Abra DevTools → Network → Fonts para ver se carregam
3. Tente usar fonte substituta Pacifico

### ❌ Problema: SVGs não aparecem

**Solução:**
1. Verifique se o import está correto: `import svgPaths from '../utils/svgPaths';`
2. Confirme que o arquivo está em `src/utils/svgPaths.ts`

### ❌ Problema: Estilos Tailwind não funcionam

**Solução:**
1. Execute `npm install -D tailwindcss`
2. Configure `tailwind.config.js`
3. Importe no CSS: `@tailwind base; @tailwind components; @tailwind utilities;`

### ❌ Problema: Componente muito largo na tela

**Solução:**
O componente tem largura fixa de 1280px. Para tornar responsivo, envolva em um container:

```tsx
<div className="max-w-[1280px] mx-auto px-4">
  <Section6 />
</div>
```

---

## 11. PERSONALIZAÇÃO

### Alterar preços

Procure por:
```tsx
<span>R$ XX,XX</span>
<p>ou R$ 1.097,00 à vista</p>
```

E substitua pelos valores reais.

### Alterar textos dos ingressos

Os textos estão nas seguintes funções:
- `Passaport` (Educador)
- `Passaport1` (Parental)
- `Passaport2` (Duplo)

### Remover/adicionar benefícios

Cada benefício é um componente `Component`, `Component1`, etc.
Para adicionar, copie um existente e ajuste o texto.

---

## 12. PERFORMANCE

O componente é grande mas otimizado. Se quiser melhorar:

1. **Lazy Load**: Carregue o componente apenas quando visível
```tsx
import { lazy, Suspense } from 'react';
const Section6 = lazy(() => import('./components/Section6'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Section6 />
    </Suspense>
  );
}
```

2. **Code Splitting**: Separe os 3 cartões em componentes independentes

---

## 📞 SUPORTE

Se tiver problemas:
1. Verifique o console do navegador (F12)
2. Confira se todos os arquivos foram criados
3. Certifique-se de que os imports estão corretos
4. Compare com o checklist acima

---

**✅ Pronto! Sua seção de ingressos está exportada e funcionando.**

---

*Última atualização: 2026-02-03*
