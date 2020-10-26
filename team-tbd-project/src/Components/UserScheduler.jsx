import * as React from 'react';
import {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
// import moment from 'moment';
import {
  ViewState,
  EditingState, 
  IntegratedEditing
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import {scheduleAddHandler, scheduleGetHandler, scheduleUpdateHandler, scheduleDeleteHandler} from "../Apis/UserSchedule";

const styles = {
  toolbarRoot: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};

const ToolbarWithLoading = withStyles(styles, { name: 'Toolbar' })(
  ({ children, classes, ...restProps }) => (
    <div className={classes.toolbarRoot}>
      <Toolbar.Root {...restProps}>
        {children}
      </Toolbar.Root>
      <LinearProgress className={classes.progress} />
    </div>
  ),
);

const mapAppointmentData = appointment => ({
  ...appointment,
  id: appointment.user_schedule_id,
  title: appointment.event_title,
  startDate: new Date(appointment.start_date_time),
  endDate: new Date(appointment.end_date_time),
  rRule: appointment.r_rule,
  exDate: appointment.ex_dates
});

function UserScheduler() {
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState('2018-06-25');
    const [currentViewName, setCurrentViewName] = useState('Day');
    const [data, setData] = useState([]);

    useEffect(() => {
        scheduleGetHandler().then(res => {
            setData(res.data.schedule);
            setLoading(false);
        })
    });

    const formattedData = data
    ? data.map(mapAppointmentData) : [];

    const currentDateChange = (currentDate) => {
        setCurrentDate(currentDate);
        setLoading(true);
    }

    const currentViewNameChange = (currentViewName) => {
        setCurrentViewName(currentViewName);
        setLoading(true);
    }

    const commitChanges = ({ added, changed, deleted }) => {
        if (added) {
            console.log(added);
            const appointment = {
                event_title: added.title,
                start_date_time: added.startDate.toISOString(),
                end_date_time: added.endDate.toISOString(),
                r_rule: added.rRule,
                ex_dates: added.exDate
            }
            scheduleAddHandler(appointment).then(res => {
                console.log(res);
            });
        }
        if (changed) {
            const changed_id = parseInt(Object.keys(changed)[0]);
            let updated_appt = formattedData.filter((appointment) => {
                return appointment.id === changed_id;
              }).map(appointment => ({...appointment, ...changed[appointment.id]}))[0];

            const appointment = {
                user_schedule_id: updated_appt.id,
                event_title: updated_appt.title,
                start_date_time: updated_appt.startDate,
                end_date_time: updated_appt.endDate,
                r_rule: updated_appt.rRule,
                ex_dates: updated_appt.exDate
            }

            scheduleUpdateHandler(appointment).then(res => {
                console.log(res);
            });
        }
        if (deleted !== undefined) {
            scheduleDeleteHandler(deleted).then(res => {
                console.log(res);
            });
        }
    }

    return (
        <Paper>
          <Scheduler
            data={formattedData}
            height={660}
          >
            <ViewState
              currentDate={currentDate}
              currentViewName={currentViewName}
              onCurrentViewNameChange={currentViewNameChange}
              onCurrentDateChange={currentDateChange}
            />
            <EditingState
                onCommitChanges={commitChanges}
            />
            <IntegratedEditing />
            <DayView
              startDayHour={6}
              endDayHour={23}
            />
            <WeekView
              startDayHour={6}
              endDayHour={23}
            />
            {/* <ConfirmationDialog /> */}
            <Appointments />
            <Toolbar
              {...loading ? { rootComponent: ToolbarWithLoading } : null}
            />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <AppointmentTooltip
              showOpenButton
              showDeleteButton
              showCloseButton
            />
            <AppointmentForm />
          </Scheduler>
        </Paper>
      );
}

export default UserScheduler;