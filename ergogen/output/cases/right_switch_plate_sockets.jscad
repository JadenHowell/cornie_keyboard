function right_switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[370.2716474,-111.9],[380.6,-111.9]]).appendArc([382.6,-109.9],{"radius":2,"clockwise":false,"large":false}).appendPoint([382.6,-51.7970146]).appendArc([380.9256292,-49.8237012],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.1617207,-40.1266866]).appendArc([321.8360915,-40.1],{"radius":2,"clockwise":false,"large":false}).appendPoint([304.1197616,-40.1]).appendArc([303.8810948,-40.1142915],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.1613332,-44.8883013]).appendArc([262.4,-46.8740098],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.4,-99.5672199]).appendArc([262.1349541,-100.5621743],{"radius":2,"clockwise":true,"large":false}).appendPoint([246.6229405,-127.611282]).appendArc([246.8258057,-129.8918118],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.9973197,-145.5890108]).appendArc([262.745354,-145.8913514],{"radius":2,"clockwise":false,"large":false}).appendPoint([279.9224017,-132.7380383]).appendArc([280.4662661,-132.4422591],{"radius":2,"clockwise":true,"large":false}).appendPoint([295.6740228,-127.0163049]).appendArc([296.3461038,-126.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([315.5283526,-126.9]).appendArc([316.0618058,-126.8275445],{"radius":2,"clockwise":false,"large":false}).appendPoint([369.7381942,-111.9724555]).appendArc([370.2716474,-111.9],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[280.5625904,-127.1906095],[289.9595166,-123.7704081]]).appendArc([291.1548617,-121.2069827],{"radius":2,"clockwise":false,"large":false}).appendPoint([287.7346602,-111.8100565]).appendArc([285.1712348,-110.6147114],{"radius":2,"clockwise":false,"large":false}).appendPoint([275.7743086,-114.0349129]).appendArc([274.5789635,-116.5983383],{"radius":2,"clockwise":false,"large":false}).appendPoint([277.999165,-125.9952645]).appendArc([280.5625904,-127.1906096],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[300,-122],[310,-122]]).appendArc([312,-120],{"radius":2,"clockwise":false,"large":false}).appendPoint([312,-110]).appendArc([310,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([300,-108]).appendArc([298,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([298,-120]).appendArc([300,-122],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[270,-64],[280,-64]]).appendArc([282,-62],{"radius":2,"clockwise":false,"large":false}).appendPoint([282,-52]).appendArc([280,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([270,-50]).appendArc([268,-52],{"radius":2,"clockwise":false,"large":false}).appendPoint([268,-62]).appendArc([270,-64],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[270,-83],[280,-83]]).appendArc([282,-81],{"radius":2,"clockwise":false,"large":false}).appendPoint([282,-71]).appendArc([280,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([270,-69]).appendArc([268,-71],{"radius":2,"clockwise":false,"large":false}).appendPoint([268,-81]).appendArc([270,-83],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[270,-102],[280,-102]]).appendArc([282,-100],{"radius":2,"clockwise":false,"large":false}).appendPoint([282,-90]).appendArc([280,-88],{"radius":2,"clockwise":false,"large":false}).appendPoint([270,-88]).appendArc([268,-90],{"radius":2,"clockwise":false,"large":false}).appendPoint([268,-100]).appendArc([270,-102],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[289,-64],[299,-64]]).appendArc([301,-62],{"radius":2,"clockwise":false,"large":false}).appendPoint([301,-52]).appendArc([299,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([289,-50]).appendArc([287,-52],{"radius":2,"clockwise":false,"large":false}).appendPoint([287,-62]).appendArc([289,-64],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[289,-83],[299,-83]]).appendArc([301,-81],{"radius":2,"clockwise":false,"large":false}).appendPoint([301,-71]).appendArc([299,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([289,-69]).appendArc([287,-71],{"radius":2,"clockwise":false,"large":false}).appendPoint([287,-81]).appendArc([289,-83],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[289,-102],[299,-102]]).appendArc([301,-100],{"radius":2,"clockwise":false,"large":false}).appendPoint([301,-90]).appendArc([299,-88],{"radius":2,"clockwise":false,"large":false}).appendPoint([289,-88]).appendArc([287,-90],{"radius":2,"clockwise":false,"large":false}).appendPoint([287,-100]).appendArc([289,-102],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[327,-64],[337,-64]]).appendArc([339,-62],{"radius":2,"clockwise":false,"large":false}).appendPoint([339,-52]).appendArc([337,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([327,-50]).appendArc([325,-52],{"radius":2,"clockwise":false,"large":false}).appendPoint([325,-62]).appendArc([327,-64],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[327,-83],[337,-83]]).appendArc([339,-81],{"radius":2,"clockwise":false,"large":false}).appendPoint([339,-71]).appendArc([337,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([327,-69]).appendArc([325,-71],{"radius":2,"clockwise":false,"large":false}).appendPoint([325,-81]).appendArc([327,-83],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[327,-102],[337,-102]]).appendArc([339,-100],{"radius":2,"clockwise":false,"large":false}).appendPoint([339,-90]).appendArc([337,-88],{"radius":2,"clockwise":false,"large":false}).appendPoint([327,-88]).appendArc([325,-90],{"radius":2,"clockwise":false,"large":false}).appendPoint([325,-100]).appendArc([327,-102],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[346,-69],[356,-69]]).appendArc([358,-67],{"radius":2,"clockwise":false,"large":false}).appendPoint([358,-57]).appendArc([356,-55],{"radius":2,"clockwise":false,"large":false}).appendPoint([346,-55]).appendArc([344,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([344,-67]).appendArc([346,-69],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[346,-88],[356,-88]]).appendArc([358,-86],{"radius":2,"clockwise":false,"large":false}).appendPoint([358,-76]).appendArc([356,-74],{"radius":2,"clockwise":false,"large":false}).appendPoint([346,-74]).appendArc([344,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([344,-86]).appendArc([346,-88],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[346,-107],[356,-107]]).appendArc([358,-105],{"radius":2,"clockwise":false,"large":false}).appendPoint([358,-95]).appendArc([356,-93],{"radius":2,"clockwise":false,"large":false}).appendPoint([346,-93]).appendArc([344,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([344,-105]).appendArc([346,-107],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[365,-69],[375,-69]]).appendArc([377,-67],{"radius":2,"clockwise":false,"large":false}).appendPoint([377,-57]).appendArc([375,-55],{"radius":2,"clockwise":false,"large":false}).appendPoint([365,-55]).appendArc([363,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([363,-67]).appendArc([365,-69],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[365,-88],[375,-88]]).appendArc([377,-86],{"radius":2,"clockwise":false,"large":false}).appendPoint([377,-76]).appendArc([375,-74],{"radius":2,"clockwise":false,"large":false}).appendPoint([365,-74]).appendArc([363,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([363,-86]).appendArc([365,-88],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[365,-107],[375,-107]]).appendArc([377,-105],{"radius":2,"clockwise":false,"large":false}).appendPoint([377,-95]).appendArc([375,-93],{"radius":2,"clockwise":false,"large":false}).appendPoint([365,-93]).appendArc([363,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([363,-105]).appendArc([365,-107],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[263.8990452,-138.4154051],[271.5594896,-131.9875289]]).appendArc([271.8060033,-129.1698647],{"radius":2,"clockwise":false,"large":false}).appendPoint([265.3781271,-121.5094204]).appendArc([262.5604629,-121.2629067],{"radius":2,"clockwise":false,"large":false}).appendPoint([254.9000186,-127.6907829]).appendArc([254.6535049,-130.5084471],{"radius":2,"clockwise":false,"large":false}).appendPoint([261.0813811,-138.1688914]).appendArc([263.8990453,-138.4154051],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
)).union(
    new CSG.Path2D([[308,-59],[318,-59]]).appendArc([320,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-47]).appendArc([318,-45],{"radius":2,"clockwise":false,"large":false}).appendPoint([308,-45]).appendArc([306,-47],{"radius":2,"clockwise":false,"large":false}).appendPoint([306,-57]).appendArc([308,-59],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[308,-78],[318,-78]]).appendArc([320,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-66]).appendArc([318,-64],{"radius":2,"clockwise":false,"large":false}).appendPoint([308,-64]).appendArc([306,-66],{"radius":2,"clockwise":false,"large":false}).appendPoint([306,-76]).appendArc([308,-78],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[308,-97],[318,-97]]).appendArc([320,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-85]).appendArc([318,-83],{"radius":2,"clockwise":false,"large":false}).appendPoint([308,-83]).appendArc([306,-85],{"radius":2,"clockwise":false,"large":false}).appendPoint([306,-95]).appendArc([308,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 1.2] });
}




                function right_switch_plate_sockets_case_fn() {
                    

                // creating part 0 of case right_switch_plate_sockets
                let right_switch_plate_sockets__part_0 = right_switch_plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let right_switch_plate_sockets__part_0_bounds = right_switch_plate_sockets__part_0.getBounds();
                let right_switch_plate_sockets__part_0_x = right_switch_plate_sockets__part_0_bounds[0].x + (right_switch_plate_sockets__part_0_bounds[1].x - right_switch_plate_sockets__part_0_bounds[0].x) / 2
                let right_switch_plate_sockets__part_0_y = right_switch_plate_sockets__part_0_bounds[0].y + (right_switch_plate_sockets__part_0_bounds[1].y - right_switch_plate_sockets__part_0_bounds[0].y) / 2
                right_switch_plate_sockets__part_0 = translate([-right_switch_plate_sockets__part_0_x, -right_switch_plate_sockets__part_0_y, 0], right_switch_plate_sockets__part_0);
                right_switch_plate_sockets__part_0 = rotate([0,0,0], right_switch_plate_sockets__part_0);
                right_switch_plate_sockets__part_0 = translate([right_switch_plate_sockets__part_0_x, right_switch_plate_sockets__part_0_y, 0], right_switch_plate_sockets__part_0);

                right_switch_plate_sockets__part_0 = translate([0,0,0], right_switch_plate_sockets__part_0);
                let result = right_switch_plate_sockets__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_switch_plate_sockets_case_fn();
            }

        