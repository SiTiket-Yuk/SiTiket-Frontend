import { Card, RadioGroup, Radio } from "@nextui-org/react";

const CardFilter = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Card className="lg:w-[16rem] p-6">
          <RadioGroup color="secondary" defaultValue="semua">
            <p>Kategori</p>
            <Radio value="semua">Semua</Radio>
            <Radio value="webinar">Webinar</Radio>
            <Radio value="workshop">Workshop</Radio>
            <Radio value="bisnis">Bisnis</Radio>
            <Radio value="festival">Festival</Radio>
          </RadioGroup>
        </Card>
      </div>
      <div>
        <Card className="lg:w-[16rem] p-6 gap-8">
          <RadioGroup color="secondary" defaultValue="semua">
            <p>Harga</p>
            <Radio value="semua">Semua</Radio>
            <Radio value="tertinggi">Tertinggi</Radio>
            <Radio value="terendah">Terendah</Radio>
            <Radio value="gratis">Gratis</Radio>
          </RadioGroup>
          <RadioGroup color="secondary" defaultValue="semua">
            <p>Jadwal</p>
            <Radio value="semua">Semua</Radio>
            <Radio value="terdekat">Terdekat</Radio>
            <Radio value="terjauh">Terjauh</Radio>
          </RadioGroup>
        </Card>
      </div>
    </div>
  );
};
export default CardFilter;
