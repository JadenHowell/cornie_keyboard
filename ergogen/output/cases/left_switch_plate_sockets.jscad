function left_switch_plate_extrude_1_2_outline_fn(){
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
)).extrude({ offset: [0, 0, 1.2] });
}




                function left_switch_plate_sockets_case_fn() {
                    

                // creating part 0 of case left_switch_plate_sockets
                let left_switch_plate_sockets__part_0 = left_switch_plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let left_switch_plate_sockets__part_0_bounds = left_switch_plate_sockets__part_0.getBounds();
                let left_switch_plate_sockets__part_0_x = left_switch_plate_sockets__part_0_bounds[0].x + (left_switch_plate_sockets__part_0_bounds[1].x - left_switch_plate_sockets__part_0_bounds[0].x) / 2
                let left_switch_plate_sockets__part_0_y = left_switch_plate_sockets__part_0_bounds[0].y + (left_switch_plate_sockets__part_0_bounds[1].y - left_switch_plate_sockets__part_0_bounds[0].y) / 2
                left_switch_plate_sockets__part_0 = translate([-left_switch_plate_sockets__part_0_x, -left_switch_plate_sockets__part_0_y, 0], left_switch_plate_sockets__part_0);
                left_switch_plate_sockets__part_0 = rotate([0,0,0], left_switch_plate_sockets__part_0);
                left_switch_plate_sockets__part_0 = translate([left_switch_plate_sockets__part_0_x, left_switch_plate_sockets__part_0_y, 0], left_switch_plate_sockets__part_0);

                left_switch_plate_sockets__part_0 = translate([0,0,0], left_switch_plate_sockets__part_0);
                let result = left_switch_plate_sockets__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_switch_plate_sockets_case_fn();
            }

        