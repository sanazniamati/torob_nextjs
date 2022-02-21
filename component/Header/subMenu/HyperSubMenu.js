import HyperData from "../../../DataJson/HyperMarket.json";

export default function HyperSubMenu() {
  return (
    <div>
      {HyperData.map(
        (items) => (
          <div key={items.id}>{items.title}</div>
        ),
        HyperData.map((items) => <div key={items.key}>{items.subtitle}</div>)
      )}
    </div>
  );
}
