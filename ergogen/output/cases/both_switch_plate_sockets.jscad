function combined_switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[99.7283526,-111.9],[89.4,-111.9]]).appendArc([87.4,-109.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.4,-51.7970146]).appendArc([89.0743708,-49.8237012],{"radius":2,"clockwise":true,"large":false}).appendPoint([147.8382793,-40.1266866]).appendArc([148.1639085,-40.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.8802384,-40.1]).appendArc([166.1189052,-40.1142915],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.8386668,-44.8883013]).appendArc([207.6,-46.8740098],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.6,-99.5672199]).appendArc([207.8650459,-100.5621743],{"radius":2,"clockwise":false,"large":false}).appendPoint([223.3770595,-127.611282]).appendArc([223.1741943,-129.8918118],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.0026803,-145.5890108]).appendArc([207.254646,-145.8913514],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.0775983,-132.7380383]).appendArc([189.5337339,-132.4422591],{"radius":2,"clockwise":false,"large":false}).appendPoint([174.3259772,-127.0163049]).appendArc([173.6538962,-126.9],{"radius":2,"clockwise":false,"large":false}).appendPoint([154.4716474,-126.9]).appendArc([153.9381942,-126.8275445],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.2618058,-111.9724555]).appendArc([99.7283526,-111.9],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[180.0404834,-123.7704081],[189.4374096,-127.1906095]]).appendArc([192.0008351,-125.9952645],{"radius":2,"clockwise":false,"large":false}).appendPoint([195.4210364,-116.5983383]).appendArc([194.2256914,-114.0349128],{"radius":2,"clockwise":false,"large":false}).appendPoint([184.8287652,-110.6147115]).appendArc([182.2653397,-111.8100565],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.8451384,-121.2069827]).appendArc([180.0404834,-123.7704082],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[160,-122],[170,-122]]).appendArc([172,-120],{"radius":2,"clockwise":false,"large":false}).appendPoint([172,-110]).appendArc([170,-108],{"radius":2,"clockwise":false,"large":false}).appendPoint([160,-108]).appendArc([158,-110],{"radius":2,"clockwise":false,"large":false}).appendPoint([158,-120]).appendArc([160,-122],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[190,-64],[200,-64]]).appendArc([202,-62],{"radius":2,"clockwise":false,"large":false}).appendPoint([202,-52]).appendArc([200,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([190,-50]).appendArc([188,-52],{"radius":2,"clockwise":false,"large":false}).appendPoint([188,-62]).appendArc([190,-64],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[190,-83],[200,-83]]).appendArc([202,-81],{"radius":2,"clockwise":false,"large":false}).appendPoint([202,-71]).appendArc([200,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([190,-69]).appendArc([188,-71],{"radius":2,"clockwise":false,"large":false}).appendPoint([188,-81]).appendArc([190,-83],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[190,-102],[200,-102]]).appendArc([202,-100],{"radius":2,"clockwise":false,"large":false}).appendPoint([202,-90]).appendArc([200,-88],{"radius":2,"clockwise":false,"large":false}).appendPoint([190,-88]).appendArc([188,-90],{"radius":2,"clockwise":false,"large":false}).appendPoint([188,-100]).appendArc([190,-102],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[171,-64],[181,-64]]).appendArc([183,-62],{"radius":2,"clockwise":false,"large":false}).appendPoint([183,-52]).appendArc([181,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([171,-50]).appendArc([169,-52],{"radius":2,"clockwise":false,"large":false}).appendPoint([169,-62]).appendArc([171,-64],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[171,-83],[181,-83]]).appendArc([183,-81],{"radius":2,"clockwise":false,"large":false}).appendPoint([183,-71]).appendArc([181,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([171,-69]).appendArc([169,-71],{"radius":2,"clockwise":false,"large":false}).appendPoint([169,-81]).appendArc([171,-83],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[171,-102],[181,-102]]).appendArc([183,-100],{"radius":2,"clockwise":false,"large":false}).appendPoint([183,-90]).appendArc([181,-88],{"radius":2,"clockwise":false,"large":false}).appendPoint([171,-88]).appendArc([169,-90],{"radius":2,"clockwise":false,"large":false}).appendPoint([169,-100]).appendArc([171,-102],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[152,-59],[162,-59]]).appendArc([164,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([164,-47]).appendArc([162,-45],{"radius":2,"clockwise":false,"large":false}).appendPoint([152,-45]).appendArc([150,-47],{"radius":2,"clockwise":false,"large":false}).appendPoint([150,-57]).appendArc([152,-59],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[152,-78],[162,-78]]).appendArc([164,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([164,-66]).appendArc([162,-64],{"radius":2,"clockwise":false,"large":false}).appendPoint([152,-64]).appendArc([150,-66],{"radius":2,"clockwise":false,"large":false}).appendPoint([150,-76]).appendArc([152,-78],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[152,-97],[162,-97]]).appendArc([164,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([164,-85]).appendArc([162,-83],{"radius":2,"clockwise":false,"large":false}).appendPoint([152,-83]).appendArc([150,-85],{"radius":2,"clockwise":false,"large":false}).appendPoint([150,-95]).appendArc([152,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-64],[143,-64]]).appendArc([145,-62],{"radius":2,"clockwise":false,"large":false}).appendPoint([145,-52]).appendArc([143,-50],{"radius":2,"clockwise":false,"large":false}).appendPoint([133,-50]).appendArc([131,-52],{"radius":2,"clockwise":false,"large":false}).appendPoint([131,-62]).appendArc([133,-64],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-83],[143,-83]]).appendArc([145,-81],{"radius":2,"clockwise":false,"large":false}).appendPoint([145,-71]).appendArc([143,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([133,-69]).appendArc([131,-71],{"radius":2,"clockwise":false,"large":false}).appendPoint([131,-81]).appendArc([133,-83],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[133,-102],[143,-102]]).appendArc([145,-100],{"radius":2,"clockwise":false,"large":false}).appendPoint([145,-90]).appendArc([143,-88],{"radius":2,"clockwise":false,"large":false}).appendPoint([133,-88]).appendArc([131,-90],{"radius":2,"clockwise":false,"large":false}).appendPoint([131,-100]).appendArc([133,-102],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[114,-69],[124,-69]]).appendArc([126,-67],{"radius":2,"clockwise":false,"large":false}).appendPoint([126,-57]).appendArc([124,-55],{"radius":2,"clockwise":false,"large":false}).appendPoint([114,-55]).appendArc([112,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([112,-67]).appendArc([114,-69],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[114,-88],[124,-88]]).appendArc([126,-86],{"radius":2,"clockwise":false,"large":false}).appendPoint([126,-76]).appendArc([124,-74],{"radius":2,"clockwise":false,"large":false}).appendPoint([114,-74]).appendArc([112,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([112,-86]).appendArc([114,-88],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[114,-107],[124,-107]]).appendArc([126,-105],{"radius":2,"clockwise":false,"large":false}).appendPoint([126,-95]).appendArc([124,-93],{"radius":2,"clockwise":false,"large":false}).appendPoint([114,-93]).appendArc([112,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([112,-105]).appendArc([114,-107],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[95,-69],[105,-69]]).appendArc([107,-67],{"radius":2,"clockwise":false,"large":false}).appendPoint([107,-57]).appendArc([105,-55],{"radius":2,"clockwise":false,"large":false}).appendPoint([95,-55]).appendArc([93,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([93,-67]).appendArc([95,-69],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[95,-88],[105,-88]]).appendArc([107,-86],{"radius":2,"clockwise":false,"large":false}).appendPoint([107,-76]).appendArc([105,-74],{"radius":2,"clockwise":false,"large":false}).appendPoint([95,-74]).appendArc([93,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([93,-86]).appendArc([95,-88],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[95,-107],[105,-107]]).appendArc([107,-105],{"radius":2,"clockwise":false,"large":false}).appendPoint([107,-95]).appendArc([105,-93],{"radius":2,"clockwise":false,"large":false}).appendPoint([95,-93]).appendArc([93,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([93,-105]).appendArc([95,-107],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[198.4405104,-131.9875289],[206.1009548,-138.4154051]]).appendArc([208.9186189,-138.1688915],{"radius":2,"clockwise":false,"large":false}).appendPoint([215.3464951,-130.508447]).appendArc([215.0999815,-127.6907829],{"radius":2,"clockwise":false,"large":false}).appendPoint([207.439537,-121.2629067]).appendArc([204.6218729,-121.5094203],{"radius":2,"clockwise":false,"large":false}).appendPoint([198.1939967,-129.1698648]).appendArc([198.4405103,-131.9875289],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
)).union(
    new CSG.Path2D([[370.2716474,-111.9],[380.6,-111.9]]).appendArc([382.6,-109.9],{"radius":2,"clockwise":false,"large":false}).appendPoint([382.6,-51.7970146]).appendArc([380.9256292,-49.8237012],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.1617207,-40.1266866]).appendArc([321.8360915,-40.1],{"radius":2,"clockwise":false,"large":false}).appendPoint([304.1197616,-40.1]).appendArc([303.8810948,-40.1142915],{"radius":2,"clockwise":false,"large":false}).appendPoint([264.1613332,-44.8883013]).appendArc([262.4,-46.8740098],{"radius":2,"clockwise":false,"large":false}).appendPoint([262.4,-99.5672199]).appendArc([262.1349541,-100.5621743],{"radius":2,"clockwise":true,"large":false}).appendPoint([246.6229405,-127.611282]).appendArc([246.8258057,-129.8918118],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.9973197,-145.5890108]).appendArc([262.745354,-145.8913514],{"radius":2,"clockwise":false,"large":false}).appendPoint([279.9224017,-132.7380383]).appendArc([280.4662661,-132.4422591],{"radius":2,"clockwise":true,"large":false}).appendPoint([295.6740228,-127.0163049]).appendArc([296.3461038,-126.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([315.5283526,-126.9]).appendArc([316.0618058,-126.8275445],{"radius":2,"clockwise":false,"large":false}).appendPoint([369.7381942,-111.9724555]).appendArc([370.2716474,-111.9],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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
))).union(
    new CSG.Path2D([[308,-59],[318,-59]]).appendArc([320,-57],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-47]).appendArc([318,-45],{"radius":2,"clockwise":false,"large":false}).appendPoint([308,-45]).appendArc([306,-47],{"radius":2,"clockwise":false,"large":false}).appendPoint([306,-57]).appendArc([308,-59],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[308,-78],[318,-78]]).appendArc([320,-76],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-66]).appendArc([318,-64],{"radius":2,"clockwise":false,"large":false}).appendPoint([308,-64]).appendArc([306,-66],{"radius":2,"clockwise":false,"large":false}).appendPoint([306,-76]).appendArc([308,-78],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[308,-97],[318,-97]]).appendArc([320,-95],{"radius":2,"clockwise":false,"large":false}).appendPoint([320,-85]).appendArc([318,-83],{"radius":2,"clockwise":false,"large":false}).appendPoint([308,-83]).appendArc([306,-85],{"radius":2,"clockwise":false,"large":false}).appendPoint([306,-95]).appendArc([308,-97],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 1.2] });
}




                function both_switch_plate_sockets_case_fn() {
                    

                // creating part 0 of case both_switch_plate_sockets
                let both_switch_plate_sockets__part_0 = combined_switch_plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let both_switch_plate_sockets__part_0_bounds = both_switch_plate_sockets__part_0.getBounds();
                let both_switch_plate_sockets__part_0_x = both_switch_plate_sockets__part_0_bounds[0].x + (both_switch_plate_sockets__part_0_bounds[1].x - both_switch_plate_sockets__part_0_bounds[0].x) / 2
                let both_switch_plate_sockets__part_0_y = both_switch_plate_sockets__part_0_bounds[0].y + (both_switch_plate_sockets__part_0_bounds[1].y - both_switch_plate_sockets__part_0_bounds[0].y) / 2
                both_switch_plate_sockets__part_0 = translate([-both_switch_plate_sockets__part_0_x, -both_switch_plate_sockets__part_0_y, 0], both_switch_plate_sockets__part_0);
                both_switch_plate_sockets__part_0 = rotate([0,0,0], both_switch_plate_sockets__part_0);
                both_switch_plate_sockets__part_0 = translate([both_switch_plate_sockets__part_0_x, both_switch_plate_sockets__part_0_y, 0], both_switch_plate_sockets__part_0);

                both_switch_plate_sockets__part_0 = translate([0,0,0], both_switch_plate_sockets__part_0);
                let result = both_switch_plate_sockets__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return both_switch_plate_sockets_case_fn();
            }

        