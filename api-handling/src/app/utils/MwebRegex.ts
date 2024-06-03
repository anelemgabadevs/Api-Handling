class MwebRegex {
    static readonly REGEX_NAME                  = /^(?! )([a-zA-Z\u00C0-\u024F ']+(?:[\s-][a-zA-Z\u00C0-\u024F ']+)*){2,254}$/;
    static readonly REGEX_EMAIL                 = /^(?! )([_a-zA-Z0-9\-.+&!/#~]+)@([a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,63})(?! )$/;
    static readonly REGEX_USERNAME_OR_EMAIL     = /^(?:[a-zA-Z\d_\-.]+|([_a-zA-Z0-9\-.+&!/#~]+)@([a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,63}))$/;
    static readonly REGEX_DN_NUMBER             = /^(?:(?:\(|)0|\+27|27)(?:1[12345678]|2[123478]|3[1234569]|4[\d]|5[134678])(?:\) | |-|)\d{3}(?: |-|)\d{4}$/;
    static readonly REGEX_MOBILE_NUMBER         = /^(?! )(?:0|27)(?:6[0-8]|7[1-4|6|8-9]|8[1-5])\d{7}(?! )$/;
    static readonly REGEX_SA_ID_NUMBER          = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))$/;
    static readonly REGEX_PASSPORT_NUMBER       = /[A-Z]{1}\d{8}/;
    static readonly REGEX_SA_PHONE_NUMBER       = /[0](\d{9})|([0](\d{2})((\d{3}))(\d{4}))|[0](\d{2})(\d{7})/;


    /* Address Regex */
    static readonly REGEX_ADDRESS_STREET_NAME = /^(?! )(?!-)(?!([\\s0-9a-zA-Z. \'-]*|(p|P)[\\s. ]*|(post|POST|Post)[\\s.]*)((o|O)[\\s. ]*|(office|Office|OFFICE)[\\s. ]*)((box|BOX|Box)[\\s. ]*))([0-9a-zA-Z. \']+(?:[\\s-][0-9a-zA-Z. \']+)*){3,254}$/;
    static readonly REGEX_ADDRESS_STREET_NUMBER = /^([0-9]{1,7})([-/]{1}[0-9]{1,7})?([a-fA-F]{0,1})$/;
    static readonly REGEX_ADDRESS_UNIT_NUMBER = /^([1-9])([0-9]{1,3})?([a-zA-Z])?$/;
    static readonly REGEX_ADDRESS_FLOOR_NUMBER = /^\b([1-9][0-9]{0,2})\b|\b(g|G|ground|Ground|GROUND)\b$/;
    static readonly REGEX_ADDRESS_BUILDING_NAME = /^(?! )(?!-)(?!([\s0-9a-zA-Z. '-]*|(p|P)[\s. ]*|(post|POST|Post)[\s.]*)((o|O)[\s. ]*|(office|Office|OFFICE)[\s. ]*)((box|BOX|Box)[\s. ]*))([0-9a-zA-Z. ']+(?:[\s-][0-9a-zA-Z. ']+)*){4,254}$/;
    static readonly REGEX_ADDRESS_ESTATE_NAME = /^[0-9a-zA-Z\- ]{2,128}$/;
    static readonly REGEX_AUTH_OTP = /^[0-9]{4,5}$/;


}

export default MwebRegex;