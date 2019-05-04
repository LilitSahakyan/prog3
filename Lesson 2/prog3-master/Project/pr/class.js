
//խոտի կլասը
class Spy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.energy = 5;
        this.multiply = 0; //բազմացման գործակից
        this.directions = [];

    }
    //շրջապատի հետազոտության մատրիցը
    newDirections() {
        this.directions = [
            [this.x - 2, this.y -2],
            [this.x -1, this.y -2],
            [this.x , this.y -2],
            [this.x + 1, this.y -2],
            [this.x + 2, this.y -2],
            [this.x - 1, this.y - 1],
            [this.x -2, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x -2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x -1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x -1, this.y + 2],
            [this.x , this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
           
        ];
    }

    //հետազոտում է շրջապատը, որոնում է հետաքրքրող կերպարներին
    //կերպարը որոշվում է t արգումենտով
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 1 && x < matrix[0].length && y >= 1 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.getDirections(4);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            //this.multiply++;
 
            //մեծացնում է էներգիան
            //this.energy++;

            //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
            //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
            for (var i in huntArr) {
                if (x == huntArr[i].x && y == huntArr[i].y) {
                    huntArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

 
        } else {
            var fundCords = this.getDirections(2);
            var cord = random(fundCords);
    
            //եթե կա հարմար սնունդ
            if (cord) {
                var x = cord[0];
                var y = cord[1];
    
                //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
                //իր հին տեղը դնում է դատարկ վանդակ
                matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
    
                //փոխում է սեփական կորդինատները օբյեկտի մեջ
                this.x = x;
                this.y = y;
    
                //բազմացման գործակիցը մեծացնում է
                //this.multiply++;
     
                //մեծացնում է էներգիան
                //this.energy++;
    
                //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
                //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
                for (var i in eatArr) {
                    if (x == eatArr[i].x && y == eatArr[i].y) {
                        eatArr.splice(i, 1);
                    }
                }
    
                //եթե պատրաստ է բազմացմանը, բազմանում է 
                if (this.multiply == 10) {
                    this.mul()
                    this.multiply = 0;
                }
                }
                else {
                    var fundCords = this.getDirections(3);
                    var cord = random(fundCords);
            
                    //եթե կա հարմար սնունդ
                    if (cord) {
                        var x = cord[0];
                        var y = cord[1];
            
                        //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
                        //իր հին տեղը դնում է դատարկ վանդակ
                        matrix[y][x] = 5;
                        matrix[this.y][this.x] = 0;
            
                        //փոխում է սեփական կորդինատները օբյեկտի մեջ
                        this.x = x;
                        this.y = y;
            
                        //բազմացման գործակիցը մեծացնում է
                        //this.multiply++;
             
                        //մեծացնում է էներգիան
                        //this.energy++;
            
                        //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
                        //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
                        for (var i in prdArr) {
                            if (x == prdArr[i].x && y == prdArr[i].y) {
                                prdArr.splice(i, 1);
                            }
                        }
            
                        //եթե պատրաստ է բազմացմանը, բազմանում է 
                        
            
                    }
     
            else {
                
                //եթե չկա հարմար սնունդ 
                this.move();
                this.energy--;
                if (this.energy <= 0) { //մահանում է, եթե էներգիան 3֊ից ցածր է
                    this.die();
                }
            }
        }
            
        }
    }
    mul() {
        //փնտրում է դատարկ տարածք
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        //եթե կա բազմանում է
        if (cord){
            var x = cord[0];
            var y = cord[1];
            // this.multiply++;
            //ստեղծում է նոր օբյեկտ (այստեղ խոտակեր) 
            //և տեղադրում է այն խոտակերների զանգվածի մեջ
            var norspy = new Spy(x, y);
            spyArr.push(norspy);

            //հիմնական matrix-ում կատարում է գրառում նոր խոտի մասին
            matrix[y][x] = 5;
            // this.multiply = 0; //????????
        } 
    }

    //die() մահանալ
    die() {
        //Հիմնական մատրիցում իր դիրքում դնում է դատարկություն
        matrix[this.y][this.x] = 0;

        //!!! ԿԱՐԵՎՈՐ !!! ջնջում է ինքն իրեն խոտակերների զանգվածից
        for (var i in spyArr) {
            if (this.x == spyArr[i].x && this.y == spyArr[i].y) {
                spyArr.splice(i, 1);
            }
        }
    }
}
    
