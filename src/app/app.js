var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tuor of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    };
    ;
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    ;
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            styles: ["\n\t  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t  .heroes .badge {\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.1em 0.7em;\n\t    background-color: #369;\n\t    line-height: 1em;\n\t    position: relative;\n\t    left: -1px;\n\t    top: -1px;\n\t  }\n\t  .selected { background-color: #EEE; color: #369; }\n  "],
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t  <li *ng-for=\"#hero of heroes\" [ng-class]=\"getSelectedClass(hero)\" (click)=\"onSelect(hero)\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<div *ng-if=\"selectedHero\">\n\t\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{selectedHero.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<div><input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
;
angular2_1.bootstrap(AppComponent);
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
//# sourceMappingURL=app.js.map