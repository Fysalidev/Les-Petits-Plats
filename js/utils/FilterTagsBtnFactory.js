class FilterTagsBtnFactory {

    constructor(catalogue, filterTagsBtnType) {
        this.catalogue = catalogue;
        this.filterTagsBtnType = filterTagsBtnType;
    }

    createBtn()  {
        switch (this.filterTagsBtnType) {
            case "ingredient":
                return new FilterBtn(this.catalogue.ingredients, "ingredient");
                break;

            case "appliance":
                return new FilterBtn(this.catalogue.appliances, "appliance");
                break;

            case "ustensil":
                return new FilterBtn(this.catalogue.ustensils, "ustensil");
                break;

            default:
                console.log("error : type not found");
                break;
        }
    }
}