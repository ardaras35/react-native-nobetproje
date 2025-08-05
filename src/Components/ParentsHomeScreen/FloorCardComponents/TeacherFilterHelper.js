const TeacherFilterHelper = {
  getFloorTeachers: (teachers, floorNumber) => {
    return teachers.filter(
      t => t.kat === floorNumber && t.durum !== 'İzinli'
    );
  },

  getAvailableTeachersCount: (teachers, floorNumber) => {
    return teachers.filter(
      t => t.kat === floorNumber && t.durum === 'Nöbetçi'
    ).length;
  },

  getAllFloorsData: (teachers) => {
    const floors = [5, 4, 3, 2, 1];
    return floors.map(floorNumber => ({
      floorNumber,
      teachers: TeacherFilterHelper.getFloorTeachers(teachers, floorNumber),
      availableCount: TeacherFilterHelper.getAvailableTeachersCount(teachers, floorNumber)
    }));
  }
};

export default TeacherFilterHelper;