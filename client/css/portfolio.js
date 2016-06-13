import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "overflowX": "hidden",
        "fontFamily": "\"Roboto Slab\",\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "webkitTapHighlightColor": "#e40c0d"
    },
    "text-muted": {
        "color": "#777"
    },
    "text-primary": {
        "color": "#e40c0d"
    },
    "p": {
        "fontSize": 14,
        "lineHeight": 1.75
    },
    "plarge": {
        "fontSize": 16
    },
    "a": {
        "outline": 0,
        "color": "#e40c0d"
    },
    "a:hover": {
        "outline": 0,
        "color": "#c62828"
    },
    "a:focus": {
        "outline": 0,
        "color": "#c62828"
    },
    "a:active": {
        "outline": 0,
        "color": "#c62828"
    },
    "aactive": {
        "outline": 0,
        "color": "#c62828"
    },
    "h1": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "h2": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "h3": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "h4": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "h5": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "h6": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "img-centered": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "bg-light-gray": {
        "backgroundColor": "#f7f7f7"
    },
    "bg-darkest-gray": {
        "backgroundColor": "#222"
    },
    "btn-primary": {
        "color": "#fff",
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d",
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "btn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#e40c0d"
    },
    "btn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#e40c0d"
    },
    "btn-primary:active": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#e40c0d",
        "backgroundImage": "none"
    },
    "btn-primaryactive": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#e40c0d",
        "backgroundImage": "none"
    },
    "open dropdown-togglebtn-primary": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#e40c0d",
        "backgroundImage": "none"
    },
    "btn-primarydisabled": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primary[disabled]": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-primary": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "getMe img": {
        "WebkitTransition": ".3s ease-in-out",
        "transition": ".3s ease-in-out",
        "borderRadius": "100%",
        "display": "inline"
    },
    "getMe li": {
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 20
    },
    "btn-lg": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700
    },
    "getMe img:hover": {
        "zIndex": 1000,
        "WebkitTransform": "scale(1.3)",
        "transform": "scale(1.3)",
        "boxShadow": "rgba(0, 0, 0, 0.3) 0 16 16 0",
        "WebkitBoxShadow": "rgba(0, 0, 0, 0.3) 0 16 16 0",
        "MozBoxShadow": "rgba(0, 0, 0, 0.3) 0 16 16 0"
    },
    "btn-primary badge": {
        "color": "#e40c0d",
        "backgroundColor": "#fff"
    },
    "btn-xl": {
        "color": "#fff",
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d",
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700,
        "borderRadius": 3,
        "fontSize": 18,
        "paddingTop": 20,
        "paddingRight": 40,
        "paddingBottom": 20,
        "paddingLeft": 40
    },
    "btn-xl:hover": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#c62828"
    },
    "btn-xl:focus": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#c62828"
    },
    "btn-xl:active": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#c62828",
        "backgroundImage": "none"
    },
    "btn-xlactive": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#c62828",
        "backgroundImage": "none"
    },
    "open dropdown-togglebtn-xl": {
        "color": "#fff",
        "backgroundColor": "#c62828",
        "borderColor": "#c62828",
        "backgroundImage": "none"
    },
    "btn-xldisabled": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xl[disabled]": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-xl": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xldisabled:hover": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xl[disabled]:hover": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-xl:hover": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xldisabled:focus": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xl[disabled]:focus": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-xl:focus": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xldisabled:active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xl[disabled]:active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-xl:active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xldisabledactive": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xl[disabled]active": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "fieldset[disabled] btn-xlactive": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "btn-xl badge": {
        "color": "#e40c0d",
        "backgroundColor": "#fff"
    },
    "navbar-default": {
        "backgroundColor": "#222",
        "borderColor": "transparent"
    },
    "navbar-default navbar-brand": {
        "color": "#e40c0d",
        "fontFamily": "\"Kaushan Script\",\"Helvetica Neue\",Helvetica,Arial,cursive"
    },
    "navbar-default navbar-brand:hover": {
        "color": "#c62828"
    },
    "navbar-default navbar-brand:focus": {
        "color": "#c62828"
    },
    "navbar-default navbar-brand:active": {
        "color": "#c62828"
    },
    "navbar-default  navbar-brandactive": {
        "color": "#c62828"
    },
    "navbar-default navbar-collapse": {
        "borderColor": "rgba(255,255,255,.02)"
    },
    "navbar-default navbar-toggle": {
        "backgroundColor": "#e40c0d",
        "borderColor": "#e40c0d"
    },
    "navbar-default navbar-toggle icon-bar": {
        "backgroundColor": "#fff"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "#e40c0d"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "#e40c0d"
    },
    "navbar-default nav li a": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 400,
        "letterSpacing": 1,
        "color": "#fff"
    },
    "navbar-default nav li a:hover": {
        "color": "#c62828",
        "outline": 0
    },
    "navbar-default nav li a:focus": {
        "color": "#c62828",
        "outline": 0
    },
    "navbar-default navbar-nav>active>a": {
        "borderRadius": 0,
        "color": "#fff",
        "backgroundColor": "#e40c0d"
    },
    "navbar-default navbar-nav>active>a:hover": {
        "color": "#fff",
        "backgroundColor": "#e40c0d"
    },
    "navbar-default navbar-nav>active>a:focus": {
        "color": "#fff",
        "backgroundColor": "#e40c0d"
    },
    "techImg": {
        "height": 100,
        "width": "auto"
    },
    "miniTech": {
        "height": 50,
        "width": 50
    },
    "modalImg": {
        "width": 175,
        "height": "auto",
        "position": "center",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "header": {
        "backgroundImage": "url(../img/ggb.jpeg)",
        "backgroundRepeat": "none",
        "backgroundAttachment": "scroll",
        "backgroundPosition": "center center",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "textAlign": "center",
        "color": "#fff"
    },
    "header intro-text": {
        "paddingTop": 100,
        "paddingBottom": 50
    },
    "header intro-text intro-lead-in": {
        "fontFamily": "\"Droid Serif\",\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontStyle": "italic",
        "fontSize": 22,
        "lineHeight": 22,
        "marginBottom": 25
    },
    "header intro-text intro-heading": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700,
        "fontSize": 50,
        "lineHeight": 50,
        "marginBottom": 25
    },
    "portfolio-Img": {
        "height": 175,
        "width": "auto",
        "marginLeft": 30
    },
    "textInfo": {
        "display": "inline"
    },
    "modalOpener": {
        "height": 300
    },
    "section": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "section h2section-heading": {
        "fontSize": 40,
        "marginTop": 0,
        "marginBottom": 15
    },
    "section h3section-subheading": {
        "fontSize": 16,
        "fontFamily": "\"Droid Serif\",\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "none",
        "fontStyle": "italic",
        "fontWeight": 400,
        "marginBottom": 75
    },
    "service-heading": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "textTransform": "none"
    },
    "portfolio portfolio-item portfolio-link": {
        "display": "block",
        "position": "relative",
        "maxWidth": 400,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "white"
    },
    "portfolio portfolio-item portfolio-link portfolio-hover": {
        "background": "#c62828",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "opacity": 0,
        "transition": "all ease .5s",
        "WebkitTransition": "all ease .5s",
        "MozTransition": "all ease .5s"
    },
    "portfolio portfolio-item portfolio-link portfolio-hover:hover": {
        "opacity": 1
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content": {
        "position": "absolute",
        "width": "100%",
        "height": 20,
        "fontSize": 20,
        "textAlign": "center",
        "top": "50%",
        "marginTop": -12,
        "color": "#fff"
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content i": {
        "marginTop": -12
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-caption": {
        "maxWidth": 400,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "#fff",
        "textAlign": "center",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "height": 100
    },
    "portfolio portfolio-item portfolio-caption h4": {
        "textTransform": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-caption p": {
        "fontFamily": "\"Droid Serif\",\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontStyle": "italic",
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio *": {
        "zIndex": 2
    },
    "timeline": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative"
    },
    "timeline:before": {
        "top": 0,
        "bottom": 0,
        "position": "absolute",
        "content": "\"\"",
        "width": 2,
        "backgroundColor": "#f1f1f1",
        "left": 40,
        "marginLeft": -1.5
    },
    "timeline>li": {
        "marginBottom": 50,
        "position": "relative",
        "minHeight": 50
    },
    "timeline>li:before": {
        "content": "\" \"",
        "display": "table"
    },
    "timeline>li:after": {
        "content": "\" \"",
        "display": "table",
        "clear": "both"
    },
    "timeline>li timeline-panel": {
        "width": "100%",
        "float": "right",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 100,
        "position": "relative",
        "textAlign": "left"
    },
    "timeline>li timeline-panel:before": {
        "borderLeftWidth": 0,
        "borderRightWidth": 15,
        "left": -15,
        "right": "auto"
    },
    "timeline>li timeline-panel:after": {
        "borderLeftWidth": 0,
        "borderRightWidth": 14,
        "left": -14,
        "right": "auto"
    },
    "timeline>li timeline-image": {
        "left": 0,
        "marginLeft": 0,
        "width": 80,
        "height": 80,
        "position": "absolute",
        "zIndex": 100,
        "backgroundColor": "#e40c0d",
        "color": "#fff",
        "borderRadius": "100%",
        "border": "7 solid #f1f1f1",
        "textAlign": "center"
    },
    "timeline>li timeline-image h4": {
        "fontSize": 10,
        "marginTop": 12,
        "lineHeight": 14
    },
    "timeline>litimeline-inverted>timeline-panel": {
        "float": "right",
        "textAlign": "left",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 100
    },
    "timeline>litimeline-inverted>timeline-panel:before": {
        "borderLeftWidth": 0,
        "borderRightWidth": 15,
        "left": -15,
        "right": "auto"
    },
    "timeline>litimeline-inverted>timeline-panel:after": {
        "borderLeftWidth": 0,
        "borderRightWidth": 14,
        "left": -14,
        "right": "auto"
    },
    "timeline>li:last-child": {
        "marginBottom": 0
    },
    "timeline timeline-heading h4": {
        "marginTop": 0,
        "color": "inherit"
    },
    "timeline timeline-heading h4subheading": {
        "textTransform": "none"
    },
    "timeline timeline-body>p": {
        "marginBottom": 0
    },
    "timeline timeline-body>ul": {
        "marginBottom": 0
    },
    "team-member": {
        "textAlign": "center",
        "marginBottom": 50
    },
    "team-member img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "border": "7 solid #fff"
    },
    "team-member h4": {
        "marginTop": 25,
        "marginBottom": 0,
        "textTransform": "none"
    },
    "team-member p": {
        "marginTop": 0
    },
    "asideclients img": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto"
    },
    "sectioncontact": {
        "backgroundColor": "#222",
        "backgroundImage": "url(../img/map-image.png)",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat"
    },
    "sectioncontact section-heading": {
        "color": "#fff"
    },
    "sectioncontact form-group": {
        "marginBottom": 25
    },
    "sectioncontact form-group input": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "sectioncontact form-group textarea": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "sectioncontact form-group inputform-control": {
        "height": "auto"
    },
    "sectioncontact form-group textareaform-control": {
        "height": 236
    },
    "sectioncontact form-control:focus": {
        "borderColor": "#e40c0d",
        "boxShadow": "none"
    },
    "sectioncontact ::-webkit-input-placeholder": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700,
        "color": "#bbb"
    },
    "sectioncontact :-moz-placeholder": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700,
        "color": "#bbb"
    },
    "sectioncontact ::-moz-placeholder": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700,
        "color": "#bbb"
    },
    "sectioncontact :-ms-input-placeholder": {
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "uppercase",
        "fontWeight": 700,
        "color": "#bbb"
    },
    "sectioncontact text-danger": {
        "color": "#e74c3c"
    },
    "footer": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "footer spancopyright": {
        "lineHeight": 40,
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "none"
    },
    "footer ulquicklinks": {
        "marginBottom": 0,
        "lineHeight": 40,
        "fontFamily": "Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "textTransform": "none"
    },
    "ulsocial-buttons": {
        "marginBottom": 0
    },
    "ulsocial-buttons li a": {
        "display": "block",
        "backgroundColor": "#222",
        "height": 100,
        "width": 100,
        "borderRadius": "100%",
        "fontSize": 20,
        "lineHeight": 40,
        "color": "#fff",
        "outline": 0,
        "WebkitTransition": "all .3s",
        "MozTransition": "all .3s",
        "transition": "all .3s"
    },
    "i": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "ulsocial-buttons li a:hover": {
        "backgroundColor": "#e40c0d"
    },
    "ulsocial-buttons li a:focus": {
        "backgroundColor": "#e40c0d"
    },
    "ulsocial-buttons li a:active": {
        "backgroundColor": "#e40c0d"
    },
    "btn:focus": {
        "outline": 0
    },
    "btn:active": {
        "outline": 0
    },
    "btnactive": {
        "outline": 0
    },
    "btn:active:focus": {
        "outline": 0
    },
    "portfolio-modal modal-content": {
        "borderRadius": 0,
        "backgroundClip": "border-box",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": 0,
        "minHeight": "100%",
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "portfolio-modal modal-content h2": {
        "marginBottom": 15,
        "fontSize": 3
    },
    "portfolio-modal modal-content p": {
        "marginBottom": 30
    },
    "portfolio-modal modal-content pitem-intro": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "fontFamily": "\"Droid Serif\",\"Helvetica Neue\",Helvetica,Arial,sans-serif",
        "fontStyle": "italic",
        "fontSize": 16
    },
    "portfolio-modal modal-content ullist-inline": {
        "marginBottom": 30,
        "marginTop": 0
    },
    "portfolio-modal modal-content img": {
        "marginBottom": 30
    },
    "portfolio-modal close-modal": {
        "position": "absolute",
        "width": 75,
        "height": 75,
        "backgroundColor": "transparent",
        "top": 25,
        "right": 25,
        "cursor": "pointer"
    },
    "portfolio-modal close-modal:hover": {
        "opacity": 0.3
    },
    "portfolio-modal close-modal lr": {
        "height": 75,
        "width": 1,
        "marginLeft": 35,
        "backgroundColor": "#222",
        "transform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "WebkitTransform": "rotate(45deg)",
        "zIndex": 1051
    },
    "portfolio-modal close-modal lr rl": {
        "height": 75,
        "width": 1,
        "backgroundColor": "#222",
        "transform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "WebkitTransform": "rotate(90deg)",
        "zIndex": 1052
    },
    "portfolio-modal modal-backdrop": {
        "opacity": 0,
        "display": "none"
    },
    "::-moz-selection": {
        "textShadow": "none",
        "background": "#e40c0d"
    },
    "::selection": {
        "textShadow": "none",
        "background": "#e40c0d"
    },
    "img::selection": {
        "background": "0 0"
    },
    "img::-moz-selection": {
        "background": "0 0"
    }
});