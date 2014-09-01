##############################################################
################## Real URL ##################################
##############################################################
config.simulateStaticDocuments = 0
config.baseURL = {$const.baseURL}
config.tx_realurl_enable = 1

###############################################################
####################     Language Setup     ###################
###############################################################
config.typolinkCheckRootline = 1
config.linkVars = L(0-1)

# Khmer (Language uid 1)
[globalVar = GP:L = 1]
config {
    sys_language_uid = 1
    language = km
    locale_all = km_KH
    alternate_html_xhtml_language = km
    htmlTag_langKey = km
}
[end]