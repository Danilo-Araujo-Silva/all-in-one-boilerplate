package com.company.spring_boot_01.controller;

import com.company.spring_boot_01.model.dao.TaskDAO;
import com.company.spring_boot_01.model.entity.TaskEntity;
import com.company.spring_boot_01.model.exception.ClientCatchableException;
import com.company.spring_boot_01.model.pojo.ResponsePojo;
import com.company.spring_boot_01.model.service.TaskService;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

/**
 * Controller to provide information about tasks.
 * For now this controller only allow traffic from `http://localhost:10002`.
 */
@Controller
@CrossOrigin(origins = "http://localhost:10002")
@RequestMapping(path="/task")
public class TaskController extends AbstractEntityController<TaskService, TaskDAO, TaskEntity> {

	/**
	 * A task service.
	 */
	@Autowired
	private TaskService taskService;

	/**
	 *
	 */
	private Logger logger = Logger.getLogger(this.getClass().getCanonicalName());

	/**
	 * Get an entity by it's id.
	 *
	 * @param id
	 * @return
	 */
	@GetMapping("get/{id}")
	public ResponseEntity<?> get(@PathVariable("id") Integer id) {
		try {
			TaskEntity entity = taskService.get(id);

			return new ResponseEntity<TaskEntity>(entity, HttpStatus.OK);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Get a list of all entities.
	 *
	 * @return
	 */
	@GetMapping("list/all")
	public ResponseEntity<?> getAll() {
		try {
			ArrayList<TaskEntity> list = taskService.getAll();

			return new ResponseEntity<List<TaskEntity>>(list, HttpStatus.OK);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Get a list of the visible (not deleted) entities.
	 *
	 * @return
	 */
	@GetMapping("list/visible")
	public ResponseEntity<?> getAllVisible() {
		try {
			ArrayList<TaskEntity> list = taskService.getAllVisible();

			return new ResponseEntity<List<TaskEntity>>(list, HttpStatus.OK);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Insert an entity in the database.
	 *
	 * @param entity
	 * @param builder
	 * @return
	 */
	@PostMapping("insert")
	public ResponseEntity<?> insert(@RequestBody TaskEntity entity, UriComponentsBuilder builder) {
		try {
			taskService.insert(entity);
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(builder.path("/task/{id}").buildAndExpand(entity.getId()).toUri());

			return new ResponseEntity<ResponsePojo>(
				new ResponsePojo(
					"Sucesso",
					"A tarefa foi criada com sucesso."
				),
				HttpStatus.CREATED
			);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Update an entity in the database.
	 *
	 * @param entity
	 * @return
	 */
	@PutMapping("update")
	public ResponseEntity<?> update(@RequestBody TaskEntity entity) {
		try {
			taskService.update(entity);

			return new ResponseEntity<ResponsePojo>(
				new ResponsePojo(
					"Sucesso",
					"A tarefa foi alterada com sucesso."
				),
				HttpStatus.OK
			);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Toggle a status from completed to pending and vice-versa.
	 *
	 * @param id
	 * @return
	 */
	@PatchMapping("toggleStatus/{id}")
	public ResponseEntity<?> toggleStatus(@PathVariable("id") Integer id) {
		try {
			ResponsePojo response = taskService.toggleStatus(id);

			return new ResponseEntity<ResponsePojo>(
				response,
				HttpStatus.OK
			);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Delete an entity by it's id.
	 *
	 * PATCH is used here because no task is really deleted, just become
	 * 	invisible.
	 *
	 * @param id
	 * @return
	 */
	@PatchMapping("delete/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
		try {
			taskService.delete(id);

			return new ResponseEntity<ResponsePojo>(
				new ResponsePojo(
					"Sucesso",
					"A tarefa foi removida com sucesso."
				),
				HttpStatus.OK
			);
		} catch (Exception exception) {
			return manageException(exception);
		}
	}

	/**
	 * Manage the exceptions and choose what message to show to the final user.
	 *
	 * @param exception
	 * @return
	 */
	public ResponseEntity<ResponsePojo> manageException(Exception exception) {
		ResponseEntity<ResponsePojo> response;
		if (ClientCatchableException.class.isAssignableFrom(exception.getClass())) {
			response = new ResponseEntity<ResponsePojo>(
				new ResponsePojo(
					"Erro",
					exception.getMessage()
				),
				HttpStatus.BAD_REQUEST
			);
		} else {
			logger.severe(ExceptionUtils.getStackTrace(exception));

			response = new ResponseEntity<ResponsePojo>(
				new ResponsePojo(
					"Erro",
					"Ocorreu um erro ao realizar esta operação. Caso o erro persista contacte o administrador."
				),
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}

		return response;
	}
}
