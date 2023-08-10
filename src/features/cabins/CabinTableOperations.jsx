import Filter from "../../ui/Filter";
import SortyBy from "../../ui/SortyBy";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <div>
      <TableOperations>
        <Filter
          filterFields="discount"
          options={[
            { value: "all", label: "All" },
            { value: "no-discount", label: "No-discount" },
            { value: "with-discount", label: "With Discount" },
          ]}
        />

        <SortyBy
          options={[
            { value: "name-asc", label: "Sort by Name(A-Z)" },
            { value: "name-desc", label: "Sort by Name(Z-A)" },
            { value: "regularPrice-asc", label: "Sort by Price(Low first)" },
            { value: "regularPrice-desc", label: "Sort by Price(High first)" },
            { value: "maxCapacity-asc", label: "Sort by Capacity(Low first)" },
            {
              value: "maxCapacity-desc",
              label: "Sort by Capacity(High first)",
            },
          ]}
        />
      </TableOperations>
    </div>
  );
};

export default CabinTableOperations;
