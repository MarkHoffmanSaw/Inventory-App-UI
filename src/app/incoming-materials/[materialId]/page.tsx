import { CreateMaterialForm } from "../../../components/materials";

export default async function IncomingMaterialPage(props: any) {
  const { materialId } = await props.params;
  return <CreateMaterialForm materialId={materialId} />;
}
