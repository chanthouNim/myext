page {
    includeCSS {
        bootstrapCss = EXT:myext/Resources/Public/Stylesheets/Bootstrap/css/bootstrap.min.css
        style = EXT:myext/Resources/Public/Stylesheets/style.css
    }
    includeJSFooterlibs {
        jQueryCore = EXT:myext/Resources/Public/Javascript/JQuery/1.10.2/jquery.min.js
        jQueryCore {
            forceOnTop = 1
            disableCompression = 1
        }
        bootstrap =  EXT:myext/Resources/Public/Javascript/Bootstrap/3.1.1/bootstrap.min.js
        bootstrap {
            disableCompression = 1
        }
    }
}
## If Root Change style css
[globalVar = TSFE:id = 1]
page {
    includeCSS {
        style = EXT:myext/Resources/Public/Stylesheets/home.css
    }
}
[end]

