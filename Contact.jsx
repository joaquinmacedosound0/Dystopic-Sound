export default function PlaceholderBlock({ icon: Icon, className = '', iconSize = 28 }) {
  return (
    <div className={`placeholder-block ${className}`}>
      {Icon && <Icon size={iconSize} strokeWidth={1.25} />}
    </div>
  );
}
