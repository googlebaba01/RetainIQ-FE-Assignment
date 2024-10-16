import PropTypes from "prop-types";

export default function TableHeader({ variants }) {
  return (
    <thead>
      <tr>
        <th className="firstColumn"></th>
        <th className="productFilter">Product Filters</th>
        {variants.map((variant) => (
          <th key={variant.id} className="header-cell">
            {variant.name}
          </th>
        ))}
        <th className="header-cell fixed-width"></th>
      </tr>
    </thead>
  );
}

// Adding PropTypes validation
TableHeader.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
