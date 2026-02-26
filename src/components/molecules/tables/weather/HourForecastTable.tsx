import { cva } from "class-variance-authority";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import dayjs from "dayjs";

type HourForecast = {
  dt: number;
  tempMin: number;
  tempMax: number;
  icon?: React.ReactNode;
  iconId: string;
  humidity: number;
};

interface HourForecastTableProps extends React.HTMLAttributes<HTMLDivElement> {
  hourForecasts: HourForecast[];
  variant?: "default" | "compact" | "detailed";
  status?: "success" | "warning" | "error" | "info" | "neutral";
}

const hourForecastTableVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6",
      compact: "p-4",
      detailed: "p-6 space-y-4",
    },
    status: {
      success:
        "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50",
      warning:
        "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/50",
      error:
        "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/50",
      info: "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50",
      neutral: "",
    },
  },
  defaultVariants: {
    variant: "default",
    status: "neutral",
  },
});

const formatDate = (dt: number) => {
  return dayjs.unix(dt).format("ddd DD h A");
};

function HourForecastTable({
  hourForecasts,
  variant = "default",
  status = "neutral",
  className,
  ...props
}: HourForecastTableProps) {
  return (
    <Table {...props}>
      <TableHeader>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Temp</TableHead>
          <TableHead>Outlook</TableHead>
          <TableHead className="text-right">Humidity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {hourForecasts.map((hourForecast) => (
          <TableRow key={hourForecast.dt}>
            <TableCell>{formatDate(hourForecast.dt)}</TableCell>
            <TableCell>
              {hourForecast.tempMin}&deg;/{hourForecast.tempMax}&deg;
            </TableCell>
            <TableCell>
              {hourForecast.icon || (
                <img
                  src={`https://openweathermap.org/img/wn/${hourForecast.iconId}.png`}
                  alt={hourForecast.iconId}
                />
              )}
            </TableCell>
            <TableCell className="text-right">
              {hourForecast.humidity}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

HourForecastTable.displayName = "HourForecastTable";

export { HourForecastTable, hourForecastTableVariants };
