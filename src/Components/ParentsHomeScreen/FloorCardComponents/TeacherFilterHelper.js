import i18n from '../../../i18n/index';

const TeacherFilterHelper = {
  getFloorTeachers: (teachers, floorNumber) => {
    return teachers.filter(
      (teacher) => teacher.kat === floorNumber && teacher.durum !== i18n.t('izinli')
    );
  },

  getAvailableTeachersCount: (teachers, floorNumber) => {
    return teachers.filter(
      (teacher) => teacher.kat === floorNumber && teacher.durum === i18n.t('nobetci')
    ).length;
  },

  getAllFloorsData: (teachers) => {
    const floors = [5, 4, 3, 2, 1];
    return floors.map((floorNumber) => ({
      floorNumber,
      teachers: TeacherFilterHelper.getFloorTeachers(teachers, floorNumber),
      availableCount: TeacherFilterHelper.getAvailableTeachersCount(teachers, floorNumber),
    }));
  },
};

export default TeacherFilterHelper;
