class a {
  constructor(newname, newage, newjob) {
    this.oname = newname;
    this.oage = newage;
    this.ojob = newjob;
  }
  get oname() {
    this._oname;
  }
  set oname(vlaue) {
      this._oname = vlaue;
  }
}

let ad = new a("w",22,"as")
let ad2 = new a()
ad2.oname = "w"


console.log(new a(1221,22,"as"));
console.log(ad);
console.log(ad._oname);
console.log(ad.oname);
console.log(ad2);
console.log(ad2._oname);
console.log(ad2.oname);