import FilterWineType     from '../Filters/FilterWineType';
import FilterPriceRange   from '../Filters/FilterPriceRange';
import FilterFoodPairings from '../Filters/FilterFoodPairings';
import FilterWineStyles   from '../Filters/FilterWineStyles';
import FilterCountries    from '../Filters/FilterCountries';
import FilterRegions      from '../Filters/FilterRegions';
import FilterGrapes       from '../Filters/FilterGrapes';
import FilterUserRating   from '../Filters/FilterUserRating';

function Sidebar() {

    return (
        <div className="col-md-4 hide_on_sm">
        <div className="row">
           <div className="col-md-12">
              
              <FilterWineType/>

              <FilterPriceRange/>

              <FilterUserRating/>

              <FilterGrapes/>

              <FilterRegions/>

              <FilterCountries/>

              <FilterWineStyles/>

              <FilterFoodPairings/>

           </div>
        </div>
   </div>
    );
}

export default Sidebar;