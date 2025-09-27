function pcb_outline_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[100,-111.9],[87.4,-111.9]]).appendPoint([87.4,-50.1]).appendPoint([148,-40.1]).appendPoint([166,-40.1]).appendPoint([207.6,-45.1]).appendPoint([235,-45.1]).appendPoint([235,-100.1]).appendPoint([224.0715784,-128.8223509]).appendPoint([208.7732333,-147.0542087]).appendPoint([189.8288346,-132.5475477]).appendPoint([174,-126.9]).appendPoint([154.2,-126.9]).appendPoint([100,-111.9]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
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
            
            
        
            function main() {
                return left_case_bottom_case_fn();
            }

        