lib.nav.left = COA
lib.nav.left {
    10 = HMENU
    10 {
        entryLevel = 1
        1 = TMENU
        1 {
            wrap = <ul class="nav nav-sidebar">|</ul>
                expAll = 1
            noBlur = 1
            NO = 1
            NO {
                ATagTitle.field = abstract // description // title
                wrapItemAndSub = <li>|<li>
            }

            ACT < .NO
            ACT {
                wrapItemAndSub = <li class="active">|<li>
            }
            CUR < .ACT
        }
    }
}
## If it is the root page then set the home page as active
[globalVar = TSFE:id != 1]
    lib.nav.main.1.IFSUB >
    lib.nav.main.1.ACTIFSUB >
    lib.nav.main.1.CURIFSUB >
    lib.nav.main.2 >
[end]