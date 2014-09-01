## Main navigation configuration
lib.nav.main = HMENU
lib.nav.main {
	special = directory
	special.value = {$const.page.root}

	1 = TMENU
	1 {
		noBlur = 1
		expAll = 1

		NO {
			ATagTitle.field = title // nav_title
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
			accessKey = 1
		}

		ACT < .NO
		ACT = 1
		ACT {
			wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>
		}

		CUR < .ACT
		CUR = 1
		CUR.wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>

		IFSUB = 1
		IFSUB {
			wrapItemAndSub = <li class="first dropdown">|</li> |*| <li class="dropdown">|</li> |*| <li class="last dropdown">|</li>
			stdWrap.wrap = | <span class="caret"></span>
			ATagParams = class="dropdown-toggle" data-toggle="dropdown"
		}

		ACTIFSUB < .IFSUB
		ACTIFSUB = 1
		ACTIFSUB {
			wrapItemAndSub = <li class="first active dropdown">|</li> |*| <li class="active dropdown">|</li> |*| <li class="last active dropdown">|</li>
		}

		CURIFSUB < .ACTIFSUB
		CURIFSUB = 1
	}
	
	2 < .1
	2 {
		wrap = <ul class="dropdown-menu">|</ul>

		NO {
			wrapItemAndSub = <li>|</li>
		}

		SPC = 1
		SPC {
			wrapItemAndSub = <li class="divider">|</li>
		}
	}
}


## If it is the root page then set the home page as active
[globalVar = TSFE:id = {$const.page.root}]
	lib.nav.main.alwaysActivePIDlist = {$const.page.home}
[end]
