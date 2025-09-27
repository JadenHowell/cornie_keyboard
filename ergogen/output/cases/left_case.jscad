function left_outer_wall_extrude_12_outline_fn(){
    return new CSG.Path2D([[99.7273834,-113.9],[87.4,-113.9]]).appendArc([85.4,-111.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([85.4,-49.8050065]).appendArc([87.0835252,-47.8302043],{"radius":2,"clockwise":true,"large":false}).appendPoint([147.6427656,-38.1251978]).appendArc([147.9592404,-38.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.0802384,-38.1]).appendArc([166.3189052,-38.1142915],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.6810948,-43.0857085]).appendArc([207.9197616,-43.1],{"radius":2,"clockwise":false,"large":false}).appendPoint([235,-43.1]).appendArc([237,-45.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([237,-100.0327532]).appendArc([236.869529,-100.7432892],{"radius":2,"clockwise":true,"large":false}).appendPoint([225.9166188,-129.5620713]).appendArc([225.5791787,-130.1371106],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.2610305,-148.3925687]).appendArc([207.4978496,-148.6831954],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.5781462,-134.687017]).appendArc([189.0406604,-134.3873431],{"radius":2,"clockwise":false,"large":false}).appendPoint([174.5356969,-129.0241241]).appendArc([173.8420906,-128.9],{"radius":2,"clockwise":false,"large":false}).appendPoint([154.2726166,-128.9]).appendArc([153.7373288,-128.8270358],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.2626712,-113.9729642]).appendArc([99.7273834,-113.9],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[99.7283526,-111.9],[89.4,-111.9]]).appendArc([87.4,-109.9],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.4,-51.7970146]).appendArc([89.0743708,-49.8237012],{"radius":2,"clockwise":true,"large":false}).appendPoint([147.8382793,-40.1266866]).appendArc([148.1639085,-40.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.8802384,-40.1]).appendArc([166.1189052,-40.1142915],{"radius":2,"clockwise":true,"large":false}).appendPoint([207.4810948,-45.0857085]).appendArc([207.7197616,-45.1],{"radius":2,"clockwise":false,"large":false}).appendPoint([233,-45.1]).appendArc([235,-47.1],{"radius":2,"clockwise":true,"large":false}).appendPoint([235,-99.7323709]).appendArc([234.869266,-100.4435985],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.1916752,-128.5067095]).appendArc([223.8544981,-129.0810572],{"radius":2,"clockwise":true,"large":false}).appendPoint([210.0026803,-145.5890108]).appendArc([207.254646,-145.8913514],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.0775983,-132.7380383]).appendArc([189.5337339,-132.4422591],{"radius":2,"clockwise":false,"large":false}).appendPoint([174.3259772,-127.0163049]).appendArc([173.6538962,-126.9],{"radius":2,"clockwise":false,"large":false}).appendPoint([154.4716474,-126.9]).appendArc([153.9381942,-126.8275445],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.2618058,-111.9724555]).appendArc([99.7283526,-111.9],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 12] });
}


function pcb_outline_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[100,-111.9],[87.4,-111.9]]).appendPoint([87.4,-50.1]).appendPoint([148,-40.1]).appendPoint([166,-40.1]).appendPoint([207.6,-45.1]).appendPoint([235,-45.1]).appendPoint([235,-100.1]).appendPoint([224.0715784,-128.8223509]).appendPoint([208.7732333,-147.0542087]).appendPoint([189.8288346,-132.5475477]).appendPoint([174,-126.9]).appendPoint([154.2,-126.9]).appendPoint([100,-111.9]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function left_case_wall_case_fn() {
                    

                // creating part 0 of case left_case_wall
                let left_case_wall__part_0 = left_outer_wall_extrude_12_outline_fn();

                // make sure that rotations are relative
                let left_case_wall__part_0_bounds = left_case_wall__part_0.getBounds();
                let left_case_wall__part_0_x = left_case_wall__part_0_bounds[0].x + (left_case_wall__part_0_bounds[1].x - left_case_wall__part_0_bounds[0].x) / 2
                let left_case_wall__part_0_y = left_case_wall__part_0_bounds[0].y + (left_case_wall__part_0_bounds[1].y - left_case_wall__part_0_bounds[0].y) / 2
                left_case_wall__part_0 = translate([-left_case_wall__part_0_x, -left_case_wall__part_0_y, 0], left_case_wall__part_0);
                left_case_wall__part_0 = rotate([0,0,0], left_case_wall__part_0);
                left_case_wall__part_0 = translate([left_case_wall__part_0_x, left_case_wall__part_0_y, 0], left_case_wall__part_0);

                left_case_wall__part_0 = translate([0,0,0], left_case_wall__part_0);
                let result = left_case_wall__part_0;
                
            
                    return result;
                }
            
            

                function left_case_bottom_case_fn() {
                    

                // creating part 0 of case left_case_bottom
                let left_case_bottom__part_0 = pcb_outline_left_extrude_2_outline_fn();

                // make sure that rotations are relative
                let left_case_bottom__part_0_bounds = left_case_bottom__part_0.getBounds();
                let left_case_bottom__part_0_x = left_case_bottom__part_0_bounds[0].x + (left_case_bottom__part_0_bounds[1].x - left_case_bottom__part_0_bounds[0].x) / 2
                let left_case_bottom__part_0_y = left_case_bottom__part_0_bounds[0].y + (left_case_bottom__part_0_bounds[1].y - left_case_bottom__part_0_bounds[0].y) / 2
                left_case_bottom__part_0 = translate([-left_case_bottom__part_0_x, -left_case_bottom__part_0_y, 0], left_case_bottom__part_0);
                left_case_bottom__part_0 = rotate([0,0,0], left_case_bottom__part_0);
                left_case_bottom__part_0 = translate([left_case_bottom__part_0_x, left_case_bottom__part_0_y, 0], left_case_bottom__part_0);

                left_case_bottom__part_0 = translate([0,0,0], left_case_bottom__part_0);
                let result = left_case_bottom__part_0;
                
            
                    return result;
                }
            
            

                function left_case_case_fn() {
                    

                // creating part 0 of case left_case
                let left_case__part_0 = left_case_wall_case_fn();

                // make sure that rotations are relative
                let left_case__part_0_bounds = left_case__part_0.getBounds();
                let left_case__part_0_x = left_case__part_0_bounds[0].x + (left_case__part_0_bounds[1].x - left_case__part_0_bounds[0].x) / 2
                let left_case__part_0_y = left_case__part_0_bounds[0].y + (left_case__part_0_bounds[1].y - left_case__part_0_bounds[0].y) / 2
                left_case__part_0 = translate([-left_case__part_0_x, -left_case__part_0_y, 0], left_case__part_0);
                left_case__part_0 = rotate([0,0,0], left_case__part_0);
                left_case__part_0 = translate([left_case__part_0_x, left_case__part_0_y, 0], left_case__part_0);

                left_case__part_0 = translate([0,0,0], left_case__part_0);
                let result = left_case__part_0;
                
            

                // creating part 1 of case left_case
                let left_case__part_1 = left_case_bottom_case_fn();

                // make sure that rotations are relative
                let left_case__part_1_bounds = left_case__part_1.getBounds();
                let left_case__part_1_x = left_case__part_1_bounds[0].x + (left_case__part_1_bounds[1].x - left_case__part_1_bounds[0].x) / 2
                let left_case__part_1_y = left_case__part_1_bounds[0].y + (left_case__part_1_bounds[1].y - left_case__part_1_bounds[0].y) / 2
                left_case__part_1 = translate([-left_case__part_1_x, -left_case__part_1_y, 0], left_case__part_1);
                left_case__part_1 = rotate([0,0,0], left_case__part_1);
                left_case__part_1 = translate([left_case__part_1_x, left_case__part_1_y, 0], left_case__part_1);

                left_case__part_1 = translate([0,0,0], left_case__part_1);
                result = result.union(left_case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_case_case_fn();
            }

        