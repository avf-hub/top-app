"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import ym from "react-yandex-metrika";


export default function YandexMetrika() {
	const key = "382974839027fdsjklsdfjkl23";
	const pathName = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const params = searchParams.toString();
		const url = "/" + pathName + (params && "?" + params);

		// ym(key, "hit", url);
	}, [pathName, searchParams]);

	return (
		<Script id="metrika">
			// Необходимо вставить рабочий ключ в переменную key
			{`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
        ym(${key}, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        });    
      `}
		</Script>
	);
}