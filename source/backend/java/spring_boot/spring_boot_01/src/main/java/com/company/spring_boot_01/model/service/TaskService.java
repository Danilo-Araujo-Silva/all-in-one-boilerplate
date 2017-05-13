package com.company.spring_boot_01.model.service;

import com.company.spring_boot_01.model.dao.TaskDAO;
import com.company.spring_boot_01.model.entity.TaskEntity;
import com.company.spring_boot_01.model.enums.ConstantsEnum;
import com.company.spring_boot_01.model.enums.TaskOperationEnum;
import com.company.spring_boot_01.model.enums.TaskStatusEnum;
import com.company.spring_boot_01.model.exception.ClientCatchableException;
import com.company.spring_boot_01.model.pojo.ResponsePojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Map;

/**
 * A Service for tasks.
 */
@Service
public class TaskService extends AbstractEntityService<TaskDAO, TaskEntity> {

	/**
	 *
	 */
	@Autowired
	private TaskDAO taskDAO;

	/**
	 * This method is responsible to sanitize or prepare an entity to some database operations like
	 * 	insert, update, delete, for example.
	 *
	 * @param entity
	 * @param operation
	 * @param helper
	 * @return
	 */
	public TaskEntity sanitize(TaskEntity entity, TaskOperationEnum operation, Map<String,Object> helper) throws Exception {
		if (
			entity != null
			&& operation != null
		) {
			if (
				TaskOperationEnum.INSERT.equals(operation)
				|| TaskOperationEnum.UPDATE.equals(operation)
				|| TaskOperationEnum.INSERT_OR_UPDATE.equals(operation)
				|| TaskOperationEnum.COMPLETE.equals(operation)
				|| TaskOperationEnum.REOPEN.equals(operation)
				|| TaskOperationEnum.DELETE.equals(operation)
			) {
				if (
					TaskOperationEnum.INSERT.equals(operation)
						|| TaskOperationEnum.UPDATE.equals(operation)
						|| TaskOperationEnum.INSERT_OR_UPDATE.equals(operation)
					) {
					if (entity.getTitle() != null) {
						entity.setTitle(entity.getTitle().trim());
					}

					if (entity.getDescription() != null) {
						entity.setDescription(entity.getDescription().trim());
					}

					if (TaskOperationEnum.INSERT.equals(operation)) {
						entity.setId(null);
						entity.setCreatedAt(new Date());
						entity.setCreatedBy(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class));
						entity.setStatus(TaskStatusEnum.PENDING.getId());
					} else if (TaskOperationEnum.UPDATE.equals(operation)) {
					} else if (TaskOperationEnum.INSERT_OR_UPDATE.equals(operation)) {
						if (entity.getId() == null) {
							entity.setStatus(TaskStatusEnum.PENDING.getId());
						}
					}
				} else if (TaskOperationEnum.COMPLETE.equals(operation)) {
					entity.setCompletedAt(new Date());
					entity.setCompletedBy(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class));
					entity.setStatus(TaskStatusEnum.COMPLETED.getId());
				} else if (TaskOperationEnum.REOPEN.equals(operation)) {
					entity.setCompletedAt(null);
					entity.setCompletedBy(null);
					entity.setStatus(TaskStatusEnum.PENDING.getId());
				} else if (TaskOperationEnum.DELETE.equals(operation)) {
					entity.setDeletedAt(new Date());
					entity.setDeletedBy(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class));
					entity.setStatus(TaskStatusEnum.DELETED.getId());
				}

				entity.setUpdatedAt(new Date());
				entity.setUpdatedBy(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class));
			} else {
				throw new IllegalArgumentException("Operação desconhecida.");
			}
		}

		return entity;
	}

	/**
	 * This method is responsible to validate an entity for some database operations like
	 * 	insert, update, delete, for example.
	 * This method will also throw exceptions when the entity is not valid. If the invalid message
	 * 	should be shown to the final user a especial exception ClientCatchableException will be used.
	 *
	 * @param entity
	 * @param operation
	 * @param helper
	 * @return
	 */
	public Boolean validate(TaskEntity entity, TaskOperationEnum operation, Map<String,Object> helper) throws Exception {
		if (entity == null) {
			throw new ClientCatchableException("A tarefa inválida.");
		} else if (operation == null) {
			throw new IllegalArgumentException("Operação inválida.");
		} else {
			if (
				TaskOperationEnum.INSERT.equals(operation)
				|| TaskOperationEnum.UPDATE.equals(operation)
				|| TaskOperationEnum.INSERT_OR_UPDATE.equals(operation)
				|| TaskOperationEnum.COMPLETE.equals(operation)
				|| TaskOperationEnum.REOPEN.equals(operation)
				|| TaskOperationEnum.DELETE.equals(operation)
			) {
				if (
					entity.getTitle() == null
					|| entity.getTitle().length() < 4
					|| entity.getTitle().length() > 100
				) {
					throw new ClientCatchableException(
						"O título da tarefa deve ter um tamanho considerável e não pode ultrapassar 100 caracteres."
					);
				}

				if (
					entity.getDescription() == null
					|| entity.getDescription().length() < 4
					|| entity.getDescription().length() > 1000
				) {
					throw new ClientCatchableException(
						"A descrição da tarefa deve ter um tamanho considerável e não pode ultrapassar 1000 caracteres."
					);
				}

				Date now = new Date();

				if (
					entity.getCreatedAt() == null
					|| now.before(entity.getCreatedAt())
				) {
					throw new IllegalArgumentException(
						"A data de criação da tarefa não pode ser inválida e não pode ser posterior a data atual."
					);
				}

				if (
					entity.getCreatedBy() == null
					|| !entity.getCreatedBy().equals(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class))
				) {
					throw new IllegalArgumentException(
						"O id do usuário criador da tarefa é inválido."
					);
				}

				if (
					entity.getUpdatedAt() == null
					|| now.before(entity.getUpdatedAt())
					|| entity.getCreatedAt().after(entity.getUpdatedAt())
				) {
					throw new IllegalArgumentException(
						"A data da última alteração na tarefa não pode ser inválida, não pode ser posterior a data atual e não pode ser inferior à data de criação."
					);
				}

				if (
					entity.getUpdatedBy() == null
					|| !entity.getUpdatedBy().equals(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class))
				) {
					throw new IllegalArgumentException(
						"O id do usuário que realizou a última alteração na tarefa é inválido."
					);
				}

				if (
					entity.getStatus() == null
					|| entity.getStatus().trim().equals("")
				) {
					throw new IllegalArgumentException(
						"O status da tarefa não foi definido."
					);
				}

				if (TaskOperationEnum.INSERT.equals(operation)) {
					if (entity.getId() != null) {
						throw new IllegalArgumentException(
							"O id da tarefa não deve ser definido na criação."
						);
					}
				} else if (TaskOperationEnum.UPDATE.equals(operation)) {
					if (entity.getId() == null) {
						throw new IllegalArgumentException(
							"O id da tarefa deve ser informado na atualização."
						);
					}
				} else if (TaskOperationEnum.INSERT_OR_UPDATE.equals(operation)) {
				} else if (TaskOperationEnum.COMPLETE.equals(operation)) {
					if (entity.getId() == null) {
						throw new IllegalArgumentException(
							"O id da tarefa deve ser informado na conclusão."
						);
					}

					if (
						entity.getCompletedAt() == null
						|| now.before(entity.getCompletedAt())
						|| entity.getUpdatedAt().after(entity.getCompletedAt())
					) {
						throw new IllegalArgumentException(
							"A data de conclusão da tarefa não pode ser inválida, não pode ser posterior a data atual e não pode ser inferior à data da última atualização."
						);
					}

					if (
						entity.getCompletedBy() == null
						|| !entity.getCompletedBy().equals(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class))
					) {
						throw new IllegalArgumentException(
							"O id do usuário que está concluindo a tarefa é inválido."
						);
					}
				} else if (TaskOperationEnum.REOPEN.equals(operation)) {
					if (entity.getId() == null) {
						throw new IllegalArgumentException(
							"O id da tarefa deve ser informado na reabertura."
						);
					}

					if (entity.getCompletedAt() != null) {
						throw new IllegalArgumentException(
							"A data de conclusão da tarefa não pode estar definida quando a tarefa é reaberta."
						);
					}

					if (entity.getCompletedBy() != null) {
						throw new IllegalArgumentException(
							"Não pode haver um id de usuário quando a tarefa está sendo concluída."
						);
					}
				} else if (TaskOperationEnum.DELETE.equals(operation)) {
					if (entity.getId() == null) {
						throw new IllegalArgumentException(
							"O id da tarefa deve ser informado na deleção."
						);
					}

					if (
						entity.getDeletedAt() == null
						|| now.before(entity.getDeletedAt())
						|| entity.getUpdatedAt().after(entity.getDeletedAt())
					) {
						throw new IllegalArgumentException(
							"A data de deleção da tarefa não pode ser inválida, não pode ser posterior a data atual e não pode ser inferior à data da última atualização."
						);
					}

					if (
						entity.getDeletedBy() == null
						|| !entity.getDeletedBy().equals(ConstantsEnum.GUEST_USER_ID.getValue(Integer.class))
					) {
						throw new IllegalArgumentException(
							"O id do usuário que está deletando a tarefa é inválido."
						);
					}
				}
			} else {
				throw new IllegalArgumentException("Operação desconhecida.");
			}
		}

		return true;
	}

	/**
	 * This method combines sanitization and validation.
	 *
	 * @param entity
	 * @param operation
	 * @param helper
	 * @return
	 */
	public Boolean sanitizeAndValidate(TaskEntity entity, TaskOperationEnum operation, Map<String,Object> helper) throws Exception {
		return validate(
			sanitize(
				entity,
				operation,
				helper
			),
			operation,
			helper
		);
	}

	/**
	 * Get an entity by it's id.
	 *
	 * @param id
	 * @return
	 */
	public TaskEntity get(Integer id) throws Exception {
		return taskDAO.get(id);
	}

	/**
	 * Get and entity by itself.
	 * This is useful when a new, untouched entity coming from the database is needed,
	 * 	for example to comparision.
	 *
	 * @param entity
	 * @return
	 */
	public TaskEntity get(TaskEntity entity) throws Exception {
		return taskDAO.get(entity);
	}

	/**
	 * Get all entities.
	 *
	 * @return
	 */
	public ArrayList<TaskEntity> getAll() throws Exception {
		return taskDAO.getAll();
	}

	/**
	 * Get all visible (not deleted) entities.
	 *
	 * @return
	 */
	public ArrayList<TaskEntity> getAllVisible() throws Exception {
		return taskDAO.getAllVisible();
	}

	/**
	 * Insert an entity in the database.
	 *
	 * @param entity
	 * @return
	 */
	public synchronized Boolean insert(TaskEntity entity) throws Exception {
		sanitizeAndValidate(entity, TaskOperationEnum.INSERT, null);

		return taskDAO.persist(entity);
	}

	/**
	 * Update an entity in the database.
	 *
	 * @param entity
	 * @return
	 */
	public Boolean update(TaskEntity entity) throws Exception {
		sanitizeAndValidate(entity, TaskOperationEnum.UPDATE, null);

		taskDAO.merge(entity);

		return taskDAO.flush();
	}

	/**
	 * Insert or update (persist) an entity in the database.
	 *
	 * @param entity
	 * @return
	 */
	public Boolean insertOrUpdate(TaskEntity entity) throws Exception {
		sanitizeAndValidate(entity, TaskOperationEnum.INSERT_OR_UPDATE, null);

		return taskDAO.persist(entity);
	}

	/**
	 * Toggle a status from completed to pending and vice-versa.
	 *
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public ResponsePojo toggleStatus(Integer id) throws Exception {
		return toggleStatus(get(id));
	}

	/**
	 * Toggle a status from completed to pending and vice-versa.
	 *
	 * @param entity
	 * @return
	 * @throws Exception
	 */
	public ResponsePojo toggleStatus(TaskEntity entity) throws Exception {
		ResponsePojo response = new ResponsePojo("Sucesso", "");

		if (entity.getCompletedAt() == null) {
			complete(entity);

			response.setMessage("A tarefa foi concluída com successo.");
		} else {
			reopen(entity);

			response.setMessage("A tarefa foi reaberta com sucesso.");
		}

		return response;
	}

	/**
	 * Mark an entity as completed by it's id.
	 *
	 * @param id
	 */
	public void complete(Integer id) throws Exception {
		complete(get(id));
	}

	/**
	 * Mark an entity as completed.
	 *
	 * @param entity
	 */
	public void complete(TaskEntity entity) throws Exception {
		sanitizeAndValidate(entity, TaskOperationEnum.COMPLETE, null);

		taskDAO.persist(entity);
	}

	/**
	 * Mark an entity as pending by it's id (reopening it).
	 *
	 * @param id
	 */
	public void reopen(Integer id) throws Exception {
		complete(get(id));
	}

	/**
	 * Mark an entity as pending (reopening it).
	 *
	 * @param entity
	 */
	public void reopen(TaskEntity entity) throws Exception {
		sanitizeAndValidate(entity, TaskOperationEnum.REOPEN, null);

		taskDAO.persist(entity);
	}

	/**
	 * Delete an entity by it's id.
	 *
	 * @param id
	 */
	public void delete(Integer id) throws Exception {
		delete(get(id));
	}

	/**
	 * Delete an entity.
	 *
	 * @param entity
	 */
	public void delete(TaskEntity entity) throws Exception {
		sanitizeAndValidate(entity, TaskOperationEnum.DELETE, null);

		taskDAO.persist(entity);
	}
}
