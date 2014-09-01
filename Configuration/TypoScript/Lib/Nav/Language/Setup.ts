lib.nav.language = HMENU
lib.nav.language {
    special = language
    special.value = 0,1
    special.normalWhenNoLanguage = 0

    1 = TMENU
    1 {

        NO {
            stdWrap.cObject = TEXT
            stdWrap.cObject.value = {$const.language.label.english} || {$const.language.label.khmer}
            allWrap = <li>|<i class="lang-bg"></i></li> |*| <li>|<i class="lang-bg"></i></li> |*| <li class="last">|<i class="lang-bg"></i></li>
        }

        ACT < .NO
        ACT = 1
        ACT {
            allWrap = <li class="active">|<i class="lang-bg"></i></li> |*| <li class="active">|<i class="lang-bg"></i></li> |*| <li class="last active">|<i class="lang-bg"></i></li>
        }

        USERDEF1 < .NO
        USERDEF1 = 1
        USERDEF1.doNotLinkIt = 1
        USERDEF1.allWrap = <li><span class="hidden"> | </span></li>
    }
}