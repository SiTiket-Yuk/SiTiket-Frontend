import {
  Card,
  Skeleton,
  Divider,
  CardFooter,
  CardBody,
} from "@nextui-org/react";

const SkeletonCard = () => {
  return (
    <Card className="lg:w-[16rem]">
      <CardBody className="p-4">
        <Skeleton className="rounded-lg mb-2">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="flex flex-col gap-5">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-row gap-4">
        <Skeleton className="flex rounded-full w-12 h-12" />
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
